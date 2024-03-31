import React from 'react'
import './styles.css'


const Loader = () => {
  return (
    <div className="loader-container">
  <div className="cloud front">
    <span className="left-front"></span>
    <span className="right-front"></span>
  </div>
  <span className="sun sunshine"></span>
  <span className="sun"></span>
  <div className="cloud back">
    <span className="left-back"></span>
    <span className="right-back"></span>
  </div>
</div>
  )
}

export default Loader
