import React from 'react'
import icon from '../../../favicon.ico'
import Image from 'next/image'
import InfoIcon from '@mui/icons-material/Info';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './linkwrapper.scss'
const LinksWrapper = () => {
  return (
    <a href="#" className="inline-flex items-center justify-center p-5 text-base font-medium text-white rounded-lg bg-slate-50 hover:text-gray-900 hover:bg-gray-100 dark:text-white-400 dark:bg-cyan-950 dark:hover:bg-gray-700 dark:hover:text-white link-wrapper">
      {/* <Image src={icon.src} /> */}
      <InfoIcon />
      <span className="w-full pl-3 pr-1 btn-txt">Get Started With Your MotorCycle Journey In Nova Scotia</span>
      <ArrowDownwardIcon />
    </a>
  )
}

export default LinksWrapper