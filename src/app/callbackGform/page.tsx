
import Header from '@/components/header/Header'
import React from 'react'
import './callbackGform.scss'
const page = () => {
    return (<>
        <div className='form-outer-container'>
            <Header />
            <div className='form-container'>
                <div className='form-inner-container'>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd46svSrMMTpQsc52pQbhFNacI_-v_8ySIK986t-dmZVj1L_A/viewform?embedded=true" height={"100%"} scrolling="no"
                        style={{ width: "100%" }} className="ifram-cls"
                    >Loading…</iframe>
                </div>
            </div>
        </div>
    </>
    )
}

export default page