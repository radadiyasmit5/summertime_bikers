
import React from 'react'
import './typewriter.scss'
import Typewriter from 'typewriter-effect'
const TypeWriterWrapper = () => {
    return (
        <div className='typewriter-container'>
            <div className='typewriter-inner-container  text-white-900 h-1 font-bold mb-14'>
                <Typewriter
                    options={{
                        strings: [
                            "Get Riding This Season!",
                            "Not Behind the Wheel, GET ON THE WHEELS!",
                            "Live full Throttle",
                            "Every Motorcycle Ride is a Tiny Vacation",
                            "When Life Takes a Curve, Lean On It",
                        ],
                        delay: 90,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
    )
}

export default TypeWriterWrapper