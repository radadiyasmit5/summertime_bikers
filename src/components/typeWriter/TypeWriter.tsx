"use client"

import React from 'react'
import './typewriter.scss'
import Typewriter from 'typewriter-effect'
const TypeWriter = () => {
    return (
        <div className='typewriter-container'>
            <div className='typewriter-inner-container  text-white-900 h-1 font-bold mb-14'>
                <Typewriter

                    options={{
                        strings: ['Get Riding This Season!', "Don't get behind the Wheels, GET ON THE WHEELS!"],
                        delay: 90,
                        autoStart: true,
                        loop: true,

                    }}
                />
            </div>
        </div>
    )
}

export default TypeWriter