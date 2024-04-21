import Header from '@/components/header/Header'
import React from 'react'
import './contactus.scss'
const page = () => {
    return (<>
        <Header />
        <div className='form-outer-container'>
            <div className='form-container'>
                <div className='form-inner-container'>
                    {/* <div style={{filter: "hue-rotate(189.73deg) saturate(18.61%) brightness(96.86%)"}}> */}
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd46svSrMMTpQsc52pQbhFNacI_-v_8ySIK986t-dmZVj1L_A/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0" height={"100%"} scrolling="no"
                        style={{ width: "100%" }} className="ifram-cls"
                    >Loading…</iframe>
                    {/* </div> */}
                </div>
            </div>
        </div>
    </>
    )
}

export default page