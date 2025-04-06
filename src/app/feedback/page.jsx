"use client"

import { Suspense } from 'react'
import Header from '@/components/header/Header'
import PromotionBar from '@/components/PromotionBar/PromotionBar'
import { LoadingSpinner } from '@/components/loadingSpinners/LoadingSpinner'
import "./feedback.scss"

const FeedbackPage = () => {
  return (
    <>
      <div className='form-container'>
        <div className='form-outer-container'>
          <PromotionBar />
          <Header />
          
          <div className='form-inner-container'>
            <Suspense fallback={<LoadingSpinner />}>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSffmhHWSnx3PH4uN6CBwNEZqPlas0JtjyYAwyorY8Sa-qCYuA/viewform?embedded=true"
                style={{
                  width: "100%",
                  color: 'black',
                  position: 'fixed',
                  top: 'calc(69px + 1.7rem)',
                  left: 0,
                  bottom: 0,
                  right: 0,
                  minHeight: '90%',
                  border: 'none',
                  margin: 0,
                  padding: 0,
                  overflow: 'scroll',
                  zIndex: '100'
                }}
                height={100}
                className="ifram-cls"
                allowFullScreen={true}
              >
                Loading...
              </iframe>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedbackPage 