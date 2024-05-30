"use client"
import React, {useContext} from "react"
import "./footer.scss"
import summertime_bikers_logo_3_no_bg from "../../../public/summertime_bikers_logo_3_no_bg.png"
import Image from "../../../node_modules/next/image"
import {Instagram} from "@mui/icons-material"
import FacebookIcon from "@mui/icons-material/Facebook"
import EmailIcon from "@mui/icons-material/Email"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import nova_scotia_map from "../../../public/nova_scotia_map.png"
import {Card, Tooltip} from "antd"
import RadarDotAnimation from "../buttons/RadarDotAnimation"
import WarningCard from "../cards/WarningCard"
const Footer = () => {
  // const {footerRef} = useContext(SectionContext)
  const LocationsArr = [
    {location: "Dartmouth", distance: "10km", postal: "B2W 6A3"},
    {location: "Truro", distance: "91km", postal: "B6L 0C4"},
    {location: "Bridgewater", distance: "103km", postal: "B4V 3J8"},
    {location: "Kentville ", distance: "109km", postal: "B4N 0H2"},
    {location: "Stellarton", distance: "153km", postal: "B0K 1S0"},
    {location: "Middleton", distance: "154km", postal: "B0S 1P0"},
    {location: "Antigonish", distance: "212km", postal: "B2G 2E2"},
    {location: "Yarmouth", distance: "300km", postal: "B5A 2T1"},
    {location: "Sydney 	", distance: "400km", postal: "B1S 1A8"},
  ]
  return (
    <section id="footer">
      <div className="footer-main-container">
        <div>
          <h1 className="location-heading capitalize font-bold">
            If you live near Halifax Citadel,
            <p>
              then this is approximately how far each Location is that does
              Motorcycle tests.
            </p>
          </h1>
        </div>
        <div className="footer-flex-1">
          <div className="location-list-container">
            <table>
              <tbody>
                {LocationsArr.map((e, i) => (
                  <tr key={e.location} style={{position: "relative"}}>
                    <td style={{position: "relative", top: "1.2rem"}}>
                      <RadarDotAnimation num={i + 1} />
                    </td>
                    <td>{e.location}</td>
                    <td>{e.distance}</td>
                    <td>{e.postal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="map-wrapper-container">
            <div className="map-container">
              <Image
                src={nova_scotia_map.src}
                width={700}
                height={100}
                className="NS_map_img"
              />

              <div className="Dartmouth_pin pin_common">
                <RadarDotAnimation num={1} name={"Dartmouth Location"} />
              </div>

              <div className="turo_pin pin_common">
                <RadarDotAnimation num={2} name={"Turo Location"} />
              </div>

              <div className="Bridgewater_pin pin_common">
                <RadarDotAnimation num={3} name={"Bridgewater Location"} />
              </div>

              <div className="Kentville_pin pin_common">
                <RadarDotAnimation num={4} name={"Kentville Location"} />
              </div>

              <div className="Stellarton_pin pin_common">
                <RadarDotAnimation num={5} name={"Stellarton Location"} />
              </div>

              <div className="Middleton_pin pin_common">
                <RadarDotAnimation num={6} name={"Middleton Location"} />
              </div>

              <div className="Antigonish_pin pin_common">
                <RadarDotAnimation num={7} name={"Antigonish Location"} />
              </div>

              <div className="Yarmouth_pin pin_common">
                <RadarDotAnimation num={8} name={"Yarmouth Locaion"} />
              </div>

              <div className="Sydney_pin pin_common">
                <RadarDotAnimation num={9} name={"Sydney Location"} />
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <WarningCard />
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
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61559950617973&mibextid=LQQJ4d"
                >
                  <FacebookIcon className="social-icons" />
                </a>
              </li>
              <li className="social-item">
                {" "}
                <a
                  target="_blank"
                  href="https://www.instagram.com/summertimebikers?igsh=b2FuZ291NHUza3Fj"
                >
                  <Instagram className="social-icons" />{" "}
                </a>
              </li>
              <li className="social-item">
                <a href="mailto:info@summertimebikers.com">
                  <EmailIcon className="social-icons" />
                </a>
              </li>
              <li className="social-item">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/summertimebikers-halifax/"
                >
                  <LinkedInIcon className="social-icons" />
                </a>
              </li>
            </ul>
          </div>
          {/* <button className="text inquiry-btn">
            Submit a Personalised Inquiry
          </button> */}

          <div className="footer-flext-1-child-2">
            <div className="footer-credits-container">
              <h2 className="text text-white text-2xl text-center">Get In Touch</h2>
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
