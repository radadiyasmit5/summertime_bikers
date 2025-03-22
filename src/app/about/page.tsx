"use client"
import React from 'react'
import './AboutPage.scss'
import Header from '@/components/header/Header'
import Button from "@/components/buttons/Button"
import { useRouter as UseRouter } from "next/navigation"
import Link from "next/link"
import BikeAnimationPage from '@/components/bikeAnimationPage/BikeAnimationPage'
import PromotionBar from '@/components/PromotionBar/PromotionBar'
import StickyGformbtn from '@/components/buttons/StickyGformbtn'
import StickyEstimateBtn from '@/components/buttons/StickyEstimateBtn'

const About = () => {
  const router = UseRouter()
  const casualtext = "text text-lg  mt-4 italic text-gray-600"
  const gfromInquiryBtn = () => {
    const handleClick = () => {
      // This function will be called when the button is clicked
      // The actual navigation is handled by the Link component
    };

    return (
      <div className="gforminquirybtn">
        <Link href={"/formridirectionpage"}>
          <Button 
            label="Find out how to borrow a Motorcycle" 
            iconURL={null} 
            backgroundColor={null} 
            textColor={null} 
            borderColor={null}
            onClick={handleClick}
          />
        </Link>
      </div>
    )
  }
  return (

    <div className='about-us-page-outer-content'>
      <PromotionBar />
      <Header />
      <h1 className="aboutus-heading">
        At Summertime Bikers Halifax, we help people get their motorcycle licence in Nova Scotia. As of now, our services include
      </h1>
      <div className="aboutus-page-main-container">
        <div className="aboutus-content-container">
          {/* <Card> */}
          <div>

            <br />

            <p>
              Breaking down the process to get a motorcycle licence in Nova Scotia and providing information.
            </p>
            <p>
              We assess the current licence status of our clients and suggest the most efficient way to get licenced.
            </p>
            <p className='providing-our-clients-para'>
              Providing our clients with a motorcycle to get their test done for a nominal fee.
            </p>
            <p>
              Also providing them with the safety gear (helmet, gloves, etc.) required for the test.
            </p>
          </div>
          {gfromInquiryBtn()}
        </div>
        <div className="bikerAnimation-container">
          <BikeAnimationPage />
        </div>
      </div>
      <StickyEstimateBtn />
      <StickyGformbtn />
    </div>
  )
}

export default About

{/* <div
className='aboutus-content-container'
>
<h2 className='aboutus-heading' >About Summertime Bikers</h2>
<div className='content-card'>
  <p>
   
  </p>

  <ul className='aboutus-list-parent-container'>
    <li>
      Breaking down the process to get motorcycle licence in Nova Scotia and provide information.
    </li>
    <li>
      Assessing current licence status for our clients and suggest the most efficient way to get licenced.
    </li>
    <li>
      Providing our clients a motorcycle to get their test done for a nominal fee.
    </li>
    <li>
      Also providing them with the safety gear (Helmet, Gloves, Etc.) required for the test.
    </li>
  </ul>
</div>
</div> */}