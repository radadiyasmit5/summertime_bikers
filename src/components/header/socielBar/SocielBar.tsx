import React from "react"
import "../header.scss"
import {
    Instagram,
} from "@mui/icons-material"
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
const SociealBar = () => {


    return (
        <ul className="social-bar-list">
            <li className="social-bar-item ">
                <a target='_blank' href='https://www.facebook.com/profile.php?id=61559950617973&mibextid=LQQJ4d'>

                    <FacebookIcon />
                </a>
            </li>
            <li className="social-bar-item ">
                <a target='_blank' href='https://www.instagram.com/summertimebikers?igsh=b2FuZ291NHUza3Fj'>
                    <Instagram />
                </a>
            </li>
            <li className="social-bar-item" >
                <a href="mailto:info@summertimebikers.com">
                    <EmailIcon />
                </a>
            </li>
            <li className="social-bar-item" >
                <a href="">
                    <LinkedInIcon />
                </a>
            </li>
            {/* <li className="social-bar-item"></li> */}
        </ul>
    )
}

export default SociealBar
