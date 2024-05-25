import React from "react"
import "./loadingSpinners.scss"
import {
  faBuilding,
  faCity,
  faMotorcycle,
  faWind,
  faTree,
} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export const LoadingSpinner = () => {
  return (
    <div className="container">
      <div className="l-container">
        <div className="motorcycle-container">
          <FontAwesomeIcon className="building" icon={faBuilding}  color='black'/>
          <FontAwesomeIcon className="city" icon={faCity} />
          <FontAwesomeIcon className="motorcycle" icon={faMotorcycle} />
          <FontAwesomeIcon className="wind" icon={faWind} />
          <FontAwesomeIcon className="tree" icon={faTree} />
          <FontAwesomeIcon className="building front" icon={faBuilding} />
        </div>
      </div>
    </div>
  )
}
