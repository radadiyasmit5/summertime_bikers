"use client"
import React, {useContext, useRef} from "react"
import "./videosection.scss"
import Typewriter from "typewriter-effect"
import bikevideo2 from "../../../public/bikevideo2.mp4"
import bikevideo2webm from "../../../public/bikevideo2.webm"
import bikevideo2ogv from "../../../public/bikevideo2.ogv"
import poster_img_home from "../../../public/poster_img_home.png"
import Image from "next/image"
import LinksWrapper from "../utils/LinkWrapper/LinksWrapper"
import {SectionContext} from "../context/SectionScrollContext"
import homePage_mobile_view from "../../../public/homePage_mobile_view.png"

const VideoSection = () => {
  const videoRef = useRef(null)
  const {handleSectionchange, moreInfoRef} = useContext(SectionContext)
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
          poster={poster_img_home.src}
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
          src={homePage_mobile_view.src}
          alt="nothing"
          width={800}
          height={800}
          loading="eager"
          // quality={100}
          objectFit="contain"
          // priority
          // style={{width: "100%", height: "100%"}}
        />
      </div>
      <div className="video-mask">
        <div className="content text-white-900 h-1 font-bold">
          <Typewriter
            options={{
              strings: [
                "Get Riding This Season!",
                "Not Behind The Wheel, GET ON THE WHEELS!",
                "Live Full Throttle",
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
          onClick={(e) => handleSectionchange(e, moreInfoRef)}
        >
          <LinksWrapper />
        </div>
      </div>
    </>
  )
}

export default VideoSection
