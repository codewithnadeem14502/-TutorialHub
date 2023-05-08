import React from "react"
import {Stack} from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
    direction="row"
    sx = {{
      overflowY:"auto" ,
      height:{xs:"auto" , md:"95%"},
      flexDirection:{md:'column'}
    }}
    >
      {categories.map((category,index)=>(
        <button className="category-btn"
        onClick = {()=>setSelectedCategory(category.name)}
         key={index}
        style={{
          background: category.name === selectedCategory &&'#FC1503', color:'white'
        }}>
          <span style={{color:category.name === selectedCategory?'white' : 'red' , marginRight:"14.8px"}}>{category.icon}</span>
          <span style={{opacity:category.name == selectedCategory?'1' : '0.85'}}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar

//we can use the states that were passed as props to update our sidebar to handle clicks and react to it for changes