import React,{useState} from 'react'

const SearchBar = ({onSearch}) => {
    let [searchTerm,setSearchTerm]=useState('')

    // function to handle the searchTerm 
    const handleSearchTerm=(e)=>{
        setSearchTerm(e.target.value)

        // debouncing : making api cal to wait for 500ms 
        setTimeout(()=>{
            onSearch(e.target.value)
        },1000)
    }

  return (
    <div className='container my-1'>
        <input 
        className='form-control border'
        value={searchTerm}
        onChange={handleSearchTerm}
        name='search-bar'
        />
    </div>
   
  )
}

export default SearchBar
