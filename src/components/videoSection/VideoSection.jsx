"use client"

import React, {useEffect, useRef} from "react"
import TypeWriter from "../typeWriter/TypeWriter"
// import video from './bikevideo1.mp4'
import "./videosection.scss"
import Typewriter from "typewriter-effect"
import bikevideo2 from "../../../public/bikevideo2.mp4"
const VideoSection = () => {
  const videoRef = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      videoRef.current.className = "hero-video hero-video-visible"
    }, 500)
  }, [])

  return (
    <>
      {/* <div className='dummy-filler-div'></div> */}
      <div className="video-container">
        <video
          autoPlay={true}
          muted
          loop
          className="hero-video"
          ref={videoRef}
          controls={false}
        >
          <source
            type="video/mp4"
            //  src='_next/static/media/bikevideo2.mp4'
            src={bikevideo2}
            // src={"../../../public/bikevideo2.mp4"}
          />
          your browser does not support video
        </video>
      </div>
      <div className="video-mask">
        <div className="content text-white-900 h-1 font-bold">
          <Typewriter
            options={{
              strings: [
                "Get Riding This Season!",
                "Don't get behind the Wheels, GET ON THE WHEELS!",
              ],
              delay: 90,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </>
  )
}

export default VideoSection
