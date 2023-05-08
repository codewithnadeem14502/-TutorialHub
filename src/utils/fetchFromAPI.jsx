

import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

let ordering = ["date","relevance","rating","title","viewCount"];
let index = Math.floor(Math.random() * ordering.length);
const options = {
  params: {
    maxResults: '50',
    regionCode: 'US'
  },
  headers: {
    'X-RapidAPI-Key': ' 12ae5d07camsh38266046fa556cdp1cdc65jsncdb6c4f99d7f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromAPI = async(url,channel)=>{
  options.params.order = !channel?ordering[index] : "date";
  const { data } = await axios.get(`${BASE_URL}/${url}`,options);
  //url string we are getting in as a parameter

  return data;
}
//utility file to retrieve video using rapid api
//options is just the way or pattern we are going to retrieve our videos in
//using axios to fulfill get/post requests
//instead of using an environment variable use a config.js file instead for it run properly