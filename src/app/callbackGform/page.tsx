"use client"
import Header from '@/components/header/Header'
import React, { Suspense } from 'react'
import { LoadingSpinner } from '../../components/loadingSpinners/LoadingSpinner'
import './callbackGform.scss'
import PromotionBar from '@/components/PromotionBar/PromotionBar'
const page = () => {

    return (<>

        <div className='form-container'>

            <div className='form-outer-container'>
                <PromotionBar/>
                <Header />

                <div className='form-inner-container' >

                    <Suspense fallback={<LoadingSpinner />}>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd46svSrMMTpQsc52pQbhFNacI_-v_8ySIK986t-dmZVj1L_A/viewform?embedded=true"
                            // width={'100%'}
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
                                zIndex: '999999'
                            }}
                            // style={{ width: '100%', height: '100%' }}
                            height={100}
                            className="ifram-cls"
                            allowFullScreen={true}

                        >Loading…</iframe>
                    </Suspense>
                </div>
            </div>
        </div >
    </>
    )
}

export default page