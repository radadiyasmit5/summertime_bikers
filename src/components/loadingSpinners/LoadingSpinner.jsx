import React from "react"
import "./loadingSpinners.scss"


export const LoadingSpinner = () => {
  return (
    <div className="container">
      <div className="l-container">
        <div className="motorcycle-container">
          <i className="building fas fa-building"></i>
          <i className="city fas fa-city"></i>
          <i className="motorcycle fas fa-motorcycle"></i>
          <i className="wind fas fa-wind"></i>
          <i className="tree fas fa-tree"></i>
          <i className="building front fas fa-building"></i>
        </div>
      </div>
    </div>
  )
}
