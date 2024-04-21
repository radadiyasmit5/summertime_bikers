import React from "react"
import "../header.scss"
import {
    Instagram,
} from "@mui/icons-material"
import FacebookIcon from '@mui/icons-material/Facebook';
const SociealBar = () => {
    
    
    return (
        <ul className="social-bar-list">
            <li className="social-bar-item">
                <FacebookIcon />

            </li>
            <li className="social-bar-item">
                {" "}
                <Instagram />{" "}
            </li>
            {/* <li className="social-bar-item"></li> */}
        </ul>
    )
}

export default SociealBar
