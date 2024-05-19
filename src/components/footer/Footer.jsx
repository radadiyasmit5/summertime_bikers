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
import Button from "../buttons/Button"
import nova_scotia_map from "../../../public/nova_scotia_map.png"
import PinDropIcon from "@mui/icons-material/PinDrop"
import {Tooltip} from "antd"
import TypeWriterWrapper from "../typeWriter/TypeWriterWrapper"
import Typewriter from "typewriter-effect"
const Footer = () => {
  // const {footerRef} = useContext(SectionContext)

  return (
    <section id="footer">
      <div className="footer-main-container">
        <div className="footer-flex-1">
          <div className="typewriter-container-footer">
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
          <div className="map-wrapper-container">
            <div className="map-container">
              <Image
                src={nova_scotia_map.src}
                width={700}
                height={100}
                className="NS_map_img"
              />
              <Tooltip title="halifax location" placement="top" arrow>
                <PinDropIcon className="haifax_pin pin_common" />
              </Tooltip>
              <Tooltip title="Dartmouth location" placement="top" arrow>
                <PinDropIcon className="Dartmouth_pin pin_common" />
              </Tooltip>
              <Tooltip title="sackville location" placement="top" arrow>
                <PinDropIcon className="sackville_pin pin_common" />
              </Tooltip>
              <Tooltip title="Amherst location" placement="top" arrow>
                <PinDropIcon className="Amherst_pin pin_common" />
              </Tooltip>
              <Tooltip title="Antigonish location" placement="top" arrow>
                <PinDropIcon className="Antigonish_pin pin_common" />
              </Tooltip>
              <Tooltip title="Bridgewater location" placement="top" arrow>
                <PinDropIcon className="Bridgewater_pin pin_common" />
              </Tooltip>
              <Tooltip title="Digby location" placement="top" arrow>
                <PinDropIcon className="Digby_pin pin_common" />
              </Tooltip>
            </div>
          </div>
        </div>
        <div></div>
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
          <button className="text inquiry-btn">
            Submit a Personalised Inquiry
          </button>

          <div className="footer-flext-1-child-2">
            <div className="footer-credits-container">
              <h2 className="text text-white text-2xl ">Get In Touch</h2>
              <p className="text text-white text-m pt-10">
                <a href="mailto:info@summertimebikers.com">
                  info@summertimebikers.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
