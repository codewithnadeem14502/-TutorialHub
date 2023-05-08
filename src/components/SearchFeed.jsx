import {useState , useEffect} from 'react'
import {Box , Typography} from '@mui/material'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()
  //populated by whatever we enter in url bar after the search
 
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
    <Box p ={2} sx ={{overflowY:'auto' , height : '90vh' ,flex:2}}>
      <Typography variant = "h4" fontWeight = "bold" mb = {2}
      sx={{color : 'white'}}>Search Results for : <span style={{color : 'red'}}>{searchTerm}</span> videos
      </Typography>
      <Videos videos = {videos/*video placeholder */}/>
    </Box>
  )
}

export default SearchFeed

//this component is similar to our regular field and the only difference is we are getting our videos based on the search term