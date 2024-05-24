"use client"
import Header from '@/components/header/Header'
import VideoSection from '@/components/videoSection/VideoSection'
import React from 'react'
import './main.scss'
import MoreInfoSection from '../components/pages/MoreInfoSection'
import StickyGformbtn from '../components/buttons/StickyGformbtn'
import Footer from '@/components/footer/Footer'
import TickerBar from '@/components/tickerBar/TickerBar'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const page = () => {
  library.add(fas);
  return (
    <>
      <Header />
      <TickerBar />
      <VideoSection />
      <MoreInfoSection />
      <Footer />
      <StickyGformbtn />
    </>
  )
}

export default page