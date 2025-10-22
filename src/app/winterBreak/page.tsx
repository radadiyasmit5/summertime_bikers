"use client"

import React from 'react'
import './winterBreak.scss'
import Header from '@/components/header/Header'
import PromotionBar from '@/components/PromotionBar/PromotionBar'
import StickyGformbtn from '@/components/buttons/StickyGformbtn'
import BikeAnimationPage from '@/components/bikeAnimationPage/BikeAnimationPage'

const WinterBreak = () => {
    return (
        <div className='winter-break-page-outer-content'>
            <PromotionBar />
            <Header />
            <h1 className="winterbreak-heading">
                At Summertime Bikers Halifax, we help people get their motorcycle licence in Nova Scotia.
                As of now, our services are unavailable during the winter times.
            </h1>
            <div className="winterbreak-page-main-container">
                <div className="winterbreak-content-container">
                    <div className="winterbreak-message">
                        <h2>We're on a Winter Break!</h2>
                        <p>Our motorcycle licensing help will resume next summer.</p>
                        <p>Thank you for your understanding.</p>
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

export default WinterBreak