import React from 'react'
import {Link} from 'react-router-dom'
import { Typography, Card , CardContent , CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle } from '../utils/constants'
const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card sx={{width:{xs:"100%",sm:'358px',md:'320px'},boxShadow:'none',borderRadius:0}}>
    <Link to={videoId?`/video/${videoId}` : demoVideoUrl}>
    <CardMedia
     alt={snippet?.title}
     image={snippet?.thumbnails?.high?.url}
     sx = {{width:{
      xs : "100%" , sm:"358px" , md:'320px'
     },height:'180px'}}
     />
    </Link>
    <CardContent sx={{backgroundColor:'#1e1e1e',height:'105px'}}>
    <Link to={videoId?`/video/${videoId}` : demoVideoUrl}>
      <Typography variant = 'subtitle1' color='white' fontWeight="bold">
        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
      </Typography>
    </Link>
    <Link to={snippet?.channelId?`/channel/${snippet?.channelId}` : demoChannelUrl}>
      <Typography variant = 'subtitle2' color='gray' fontWeight="bold">
        {snippet?.channelTitle || demoChannelTitle}
        <CheckCircle sx={{fontSize:12,color:'gray',ml:'3.5px'}}/>
      </Typography>
    </Link>
    </CardContent>
    </Card>
  )
}

export default VideoCard

//cardMedia components holds each thumbnail container
//Link provides the link to video the thumbnail of the video is linking to