import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton} from '@mui/material';
import Search from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault(); //to avoid default behaviour of browser that occurs on sumission of forms i.e it reloads the page

    if(searchTerm){
      navigate(`/search/${searchTerm}`)//helps us navigate to that specefic url

      setSearchTerm('')
    }
    
  }

  return (
    <Paper 
    component = "form"
    onSubmit = {handleSubmit}
    sx={{
      borderRadius: 20,
      border : '1px solid #e3e3e3',
      pl:2,
      boxShadow:'none',
      mr: {sm:5}
    }}>
    <input className='search-bar' placeholder='Search...' 
      value = {searchTerm} onChange = {(e)=>{setSearchTerm(e.target.value)}}
    />
    <IconButton type="submit" 
    sx={{p:'10px',color:'#FA8072'}}>
      <Search/>
    </IconButton>
    </Paper>
  )
}

export default SearchBar

//paper is just a simple div that has white background with some elevations
//sx is for styles for component