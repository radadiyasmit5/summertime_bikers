"use client"
import React, {useContext, useRef, useEffect, useState} from "react"
import "./videosection.scss"
import Typewriter from "typewriter-effect"
import bikevideo2 from "../../../public/bikevideo2.mp4"
import bikevideo2webm from "../../../public/bikevideo2.webm"
import bikevideo2ogv from "../../../public/bikevideo2.ogv"
import poster_img_home from "../../../public/poster_img_home.png"
import Image from "next/image"
import LinksWrapper from "../utils/LinkWrapper/LinksWrapper"
import {SectionContext} from "../context/SectionScrollContext"
// import homePage_mobile_view from "../../../public/homePage_mobile_view.png"
import homePage_mobile_view from "../../../public/images/mobile-hero.jpg"

const VideoSection = () => {
  const videoRef = useRef(null)
  const {handleSectionchange, moreInfoRef} = useContext(SectionContext)
  const [isMobile, setIsMobile] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 479) // Adjusted breakpoint to match CSS
    }

    // Initial check
    handleResize()

    // Add event listener with debounce
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize)

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', debouncedResize)
    }
  }, [])

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  const typewriterStrings = [
    "Get Riding This Season!",
    "Not Behind The Wheel, GET ON THE WHEELS!",
    "Live Full Throttle",
    "Every Motorcycle Ride is a Tiny Vacation",
    "When Life Takes a Curve, Lean On It",
  ]

  return (
    <section className="relative">
      <div className="video-container" aria-hidden={isMobile}>
        {!isMobile && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
            ref={videoRef}
            onLoadedData={handleVideoLoad}
            poster={poster_img_home.src}
          >
            <source src={bikevideo2} type="video/mp4" />
            <source src={bikevideo2webm} type="video/webm" />
            <source src={bikevideo2ogv} type="video/ogg" />
            Your browser does not support video playback.
          </video>
        )}
      </div>
      
      <div className="img-container" aria-hidden={!isMobile}>
        {isMobile && (
          <Image
            className="hero-img"
            src={homePage_mobile_view.src}
            alt="Motorcycle hero image"
            width={800}
            height={800}
            priority
            quality={90}
            sizes="100vw"
          />
        )}
      </div>
    
      <div className="video-mask">
        <div className="content" role="heading" aria-level="1">
          <Typewriter
            options={{
              strings: typewriterStrings,
              delay: 90,
              autoStart: true,
              loop: true,
              cursor: '|',
              cursorClassName: 'typewriter-cursor'
            }}
          />
        </div>
        <button
          className="link-wrapper-container"
          onClick={(e) => handleSectionchange(e, moreInfoRef)}
          aria-label="Learn more about motorcycle journey"
        >
          <LinksWrapper />
        </button>
      </div>
    </section>
  )
}

export default VideoSection
