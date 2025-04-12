import React from 'react'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './linkwrapper.scss'

const LinksWrapper = () => {
  return (
    <a href="#" className="link-wrapper">
      <RocketLaunchOutlinedIcon />
      <span className="btn-txt">Start Your Motorcycle Journey</span>
      <KeyboardArrowDownIcon />
    </a>
  )
}

export default LinksWrapper