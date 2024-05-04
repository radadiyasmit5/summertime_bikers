import React from "react"
import './loadingSpinners.css'
export const LoadingSpinner = () => {
  return (
    <div className='loadingparentContainer'>
      <div id="loop" className="center"></div>
      <div id="bike-wrapper" className="center">
        <div id="bike" className="centerBike"></div>
      </div>
    </div>
  )
}
