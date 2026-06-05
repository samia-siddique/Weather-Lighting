// User Types City Name in Search Bar and Presses Enter to Get Weather Information.

import React from 'react'
import './SearchBar.css'

const SearchBar = ({ city, setCity, setWeather }) => {
  
  return (
    <div className="search-bar">
        <input value={city} onChange ={(e) => setCity(e.target.value)} type="text" placeholder="Enter City..."/>
        <button onClick={() => setWeather(city)}>Search</button>      
    </div>
  )
}

export default SearchBar
