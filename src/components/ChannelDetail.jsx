import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import {Videos , ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  //going to re-render whenever there is a change in id
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet`,true)
    .then((data)=>setVideos(data?.items))
  },[id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(187,238,155,1) 45%, rgba(245,185,244,1) 55%)',
          zIndex : 10 , 
          height : "299px"
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display="flex" p ="2">
        <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail

//this page will hold details of channel(profile page of channel) when a user clicks the channel profile on videos section.
//useParams can be used to retrieve the channel id when we click on the channel icon that leads to its profile page
//sx can change depending on state when applied