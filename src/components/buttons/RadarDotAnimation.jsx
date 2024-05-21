import React from "react"
import "./radardotanimation.scss"
import {Tooltip} from "antd"
const RadarDotAnimation = ({num, name}) => {
  return (
    <>
      {/* <div id="room"></div> */}
      <span className="hotspot main-wrapper">
        <span className="hotspot dots-container">
          <Tooltip title={name} placement="top" arrow>
            <span className="hotspot dot1" data-text=""></span>
            <span className="hotspot dot2" data-text=""></span>
            <span className="hotspot dot3" data-text={num}></span>
          </Tooltip>
        </span>
      </span>
    </>
  )
}

export default RadarDotAnimation
