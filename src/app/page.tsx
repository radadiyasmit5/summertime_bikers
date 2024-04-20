import Header from '@/components/header/Header'
import MenuContainer from '@/components/header/menu/MenuContainer'
import TypeWriter from '@/components/typeWriter/TypeWriter'
import VideoSection from '@/components/videoSection/VideoSection'
import React from 'react'
import './main.scss'
const page = () => {
  return (
    <>
      <Header />
      {/* <TypeWriter /> */}
      <VideoSection />
    </>
  )
}

export default page