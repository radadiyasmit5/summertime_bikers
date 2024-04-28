"use client"
import React, {useContext} from "react"
import "./footer.scss"
import {SectionContext} from "../context/SectionScrollContext"
import {MapContainer, TileLayer, useMap} from "react-leaflet"
import summertime_bikers_logo_3_no_bg from "../../../public/summertime_bikers_logo_3_no_bg.png"
import Image from "../../../node_modules/next/image"
import {Instagram} from "@mui/icons-material"
import FacebookIcon from "@mui/icons-material/Facebook"
import SociealBar from "../header/socielBar/SocielBar"
const Footer = () => {
  const {footerRef} = useContext(SectionContext)

  return (
    <section id="footer" ref={footerRef}>
      <div className="footer-main-container">
        <div className="footer-flex-1">
          <div className="signup-text">Reach Out To Us</div>
          <div className="map-container">
            <iframe
              // style={{}}
              width="100%"
              height="300"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=nova%20scotia+(summertime%20bikers)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps devices</a>
            </iframe>
          </div>
        </div>
        <div className="footer-flex-2 pt-14">
          <div className="footer-flext-1-child-1">
            <Image
              className="logo-img logo-footer"
              src={summertime_bikers_logo_3_no_bg}
              alt="nothing"
              // onClick={onLogoClick}
            />

            <ul className="social-item-container">
              <li className="social-item">
                <FacebookIcon className="social-icons" />
              </li>
              <li className="social-item">
                {" "}
                <Instagram className="social-icons" />{" "}
              </li>
            </ul>
          </div>
          <div className="footer-flext-1-child-2">
            <div className="footer-credits-container">
              <h2 className="text text-white text-2xl ">Get In Touch</h2>
              <p className='text text-white text-sm pt-10'>EmailAddress@gmail.com</p>
              <p className='text text-white text-sm pt-10'>+1 9023456785</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
