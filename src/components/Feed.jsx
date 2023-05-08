import {useState , useEffect} from 'react'
import {Box , Stack , Typography} from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videos, setVideos] = useState([])
 
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

return (
    <Stack
    sx = {{flexDirection : {xs:"column" , md:"row"}}}>
    <Box sx={{height:{xs:"auto" , md:"92vh"},borderRight:"1px solid #171717",px:{xs:0 , md:2}}}>
    <Sidebar
    selectedCategory = {selectedCategory}
    setSelectedCategory = {setSelectedCategory}
    />
    <Typography className='copyright' variant="body2" sx={{mt:1.5 , color:'#fff'}}>
    Copyright 2023 @Nadeem
    </Typography>
    </Box>
    <Box p ={2.5} sx ={{overflowY:'auto' , height : '90vh' ,flex:2}}>
      <Typography variant = "h4" fontWeight = "bold" mb = {2}
      sx={{color : 'white'}}>
        {selectedCategory} <span style={{color : 'red'}}>Videos</span>
      </Typography>
      <Videos videos = {videos/*video placeholder */}/>
    </Box>
    </Stack>
  )
}

export default Feed

//most important component that also handles fetching of videos from youtube api
//it has 2 box parts -> the sidebar and the videofield that actually retrieves the video
//typography is used for all text elements
//we will use rapid api to fetch video data
//fetchFromApi is used with useEffect as we want it to execute as soon as our feed loads because we want to immediately fetch the data
//useEffect is a lifecycle hook which gets called when the component initially loads
//code inside useEffect will run only on page reload and as we are using the useState selectedCategory in it , it should be provided in the dependency array i.e it will recall fetchFromAPI function whenever there is a change in that useState
//to reflect the selected category on our site , we need to provide some states to our sidebar
//after that we need to provide a then fuction to fetchFromAPI to actually retrieve the video