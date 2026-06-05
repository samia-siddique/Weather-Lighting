// User Types City Name in Search Bar and Presses Enter to Get Weather Information.

import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-bar">
        <input type="text" placeholder="Enter City..."/>
        <button>Search</button>
      
    </div>
  )
}

export default SearchBar
