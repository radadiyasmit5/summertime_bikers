"use client"
import React, {Suspense, useContext, useEffect, useRef} from "react"
import TypeWriterWrapper from "../typeWriter/TypeWriterWrapper"
// import video from './bikevideo1.mp4'
import "./videosection.scss"
import Typewriter from "typewriter-effect"
import bikevideo2 from "../../../public/bikevideo2.mp4"
import bikevideo2webm from "../../../public/bikevideo2.webm"
import bikevideo2ogv from "../../../public/bikevideo2.ogv"
// import summertime_bikers_logo_2_no_bg from "../../../public/summertime_bikers_logo_2_no_bg.png"
import bullet_bike from "../../../public/bullet_bike.jpg"
import harley1 from "../../../public/harley1.jpg"
import Image from "next/image"
import LinksWrapper from "../utils/LinkWrapper/LinksWrapper"
import {SectionContext} from "../context/SectionScrollContext"
import StickyGformbtn from "../buttons/StickyGformbtn"
import {LoadingSpinner} from "../loadingSpinners/LoadingSpinner"

const VideoSection = () => {
  const videoRef = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      videoRef.current.className = "hero-video hero-video-visible"
    }, 500)
  }, [])
  const {
    handleSectionchange,
    moreInfoRef,
    experienceRef,
    technologiesRef,
    headerRef,
    contactRef,
  } = useContext(SectionContext)
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
          <source type="video/mp4" src={bikevideo2} />
          <source type="video/webm" src={bikevideo2webm} />
          <source type="video/ogg" src={bikevideo2ogv} />
          {/* <Image src={harley1.src} alt="nothing" width={100} height={100} /> */}
          your browser does not support video
        </video>
      </div>
      <div className="img-container">
        <Image
          className="hero-img"
          ref={videoRef}
          src={harley1.src}
          alt="nothing"
          width={100}
          height={100}
          loading="eager"
          // style={{width: "100%", height: "100%"}}
        />
      </div>
      <div className="video-mask">
        <div className="content text-white-900 h-1 font-bold">
          <Typewriter
            options={{
              strings: [
                "Get Riding This Season!",
                "Not Behind the Wheel, GET ON THE WHEELS!",
                "Live full Throttle",
                "Every Motorcycle Ride is a Tiny Vacation",
                "When Life Takes a Curve, Lean On It",
              ],
              delay: 90,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div
          className="link-wrapper-container text-white"
          onClick={() => handleSectionchange(moreInfoRef)}
        >
          <LinksWrapper />
        </div>
      </div>
    </>
  )
}

export default VideoSection
