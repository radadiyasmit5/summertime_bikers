import Header from '@/components/header/Header'
import VideoSection from '@/components/videoSection/VideoSection'
import React from 'react'
import './main.scss'
import MoreInfoSection from '../components/pages/MoreInfoSection'
import StickyGformbtn from '../components/buttons/StickyGformbtn'
import Footer from '@/components/footer/Footer'
const page = () => {
  
  return (
    <>
      <Header />
      <VideoSection />
      <MoreInfoSection />
      <Footer />
      <StickyGformbtn />
    </>
  )
}

export default page