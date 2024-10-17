"use client"
import React from 'react'
import './winterBreak.scss'
import Header from '@/components/header/Header'
import Button from "@/components/buttons/Button"
import { useRouter as UseRouter } from "next/navigation"
import Link from "next/link"
import BikeAnimationPage from '@/components/bikeAnimationPage/BikeAnimationPage'
import PromotionBar from '@/components/PromotionBar/PromotionBar'
import StickyGformbtn from '@/components/buttons/StickyGformbtn'
const About = () => {
    const router = UseRouter()
    const casualtext = "text text-lg  mt-4 italic text-gray-600"

    return (

        <div className='about-us-page-outer-content'>
            <PromotionBar />
            <Header />
            <h1 className="aboutus-heading">
                At Summertime Bikers Halifax, we help people get their motorcycle licence in Nova Scotia. As of now, our services are unavailable during the winter times.
            </h1>
            <div className="aboutus-page-main-container">
                <div className="aboutus-content-container">
                    {/* <Card> */}
                    <div>

                        <br />
                        <h1 className='p-2'>We're on a Winter Break!</h1>
                        <p className='p-2'>Our motorcycle licensing help will resume next summer.</p>
                        <p className='p-2'>Thank you for your understanding.</p>
                    </div>

                </div>
                <div className="bikerAnimation-container">
                    <BikeAnimationPage />
                </div>
            </div>
            <StickyGformbtn />
        </div>
    )
}

export default About
