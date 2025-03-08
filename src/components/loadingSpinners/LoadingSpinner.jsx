import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCity, faMotorcycle, faWind, faTree } from '@fortawesome/free-solid-svg-icons'
import "./loadingSpinners.scss"

export const LoadingSpinner = () => {
  return (
    <div className="container">
      <div className="l-container">
        <div className="motorcycle-container">
          <FontAwesomeIcon icon={faBuilding} className="building" />
          <FontAwesomeIcon icon={faCity} className="city" />
          <FontAwesomeIcon icon={faMotorcycle} className="motorcycle" />
          <FontAwesomeIcon icon={faWind} className="wind" />
          <FontAwesomeIcon icon={faTree} className="tree" />
          <FontAwesomeIcon icon={faBuilding} className="building front" />
        </div>
        <div className="loading-text">
          Loading...
        </div>
      </div>
    </div>
  )
}
