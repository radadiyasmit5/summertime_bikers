import Header from '@/components/header/Header'
import MenuContainer from '@/components/header/menu/MenuContainer'
import TypeWriter from '@/components/typeWriter/TypeWriter'
import LinksWrapper from '@/components/utils/LinkWrapper/LinksWrapper'
import VideoSection from '@/components/videoSection/VideoSection'
import React from 'react'
import './main.scss'
import MoreInfoHomePage from '../components/pages/MoreInfoHomePage'
import MoreInfoSection from '../components/pages/MoreInfoSection'
const page = () => {
  return (
    <>
      <Header />
      {/* <TypeWriter /> */}
      <VideoSection />
      {/* <MoreInfoHomePage /> */}
      <MoreInfoSection />
    </>
  )
}

export default page