// It shows dramatice lighting effects based on the Weather Condition and Time of Day.

import React from 'react'
import './ChaosDisplay.css'
import SearchBar from '../SearchBar/SearchBar'

const ChaosDisplay = () => {
  return (
    <div className="chaos-display">
      <h1>Chaos Weather Display</h1>
      <SearchBar />
    </div>
  )
}

export default ChaosDisplay
