"use client"
import React, {useEffect, useRef} from "react"
import TypeWriter from "../typeWriter/TypeWriter"
// import video from './bikevideo1.mp4'
import "./videosection.scss"
import Typewriter from "typewriter-effect"
import bikevideo2 from "../../../public/bikevideo2.mp4"
// import summertime_bikers_logo_2_no_bg from "../../../public/summertime_bikers_logo_2_no_bg.png"
import bullet_bike from '../../../public/bullet_bike.jpg'
import harley1 from '../../../public/harley1.jpg'
import Image from 'next/image'

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
        //   playsinline
          className="hero-video"
          ref={videoRef}
          controls={false}
          preload="auto"
          poster={harley1.src}
        >
          <source
            type="video/mp4"
            src={bikevideo2}
            
          />
        {/* <Image  src={bullet_bike} alt="nothing"/> */}
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
