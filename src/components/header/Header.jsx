"use client"
// import { Link, Outlet } from "react-router-dom"
import Link from "next/link"
import React, {useContext, useState} from "react"
import "./header.scss"
import '../../app/main.scss'
import summertime_bikers_logo_3_no_bg from "../../../public/summertime_bikers_logo_3_no_bg.png"
import Image from "next/image"
import SociealBar from "./socielBar/SocielBar"
import MenuIcon from "@mui/icons-material/Menu"
import Button from "@mui/material/Button"
import {useRouter} from "next/navigation"
import {SectionContext} from "../context/SectionScrollContext"
import CloseIcon from "@mui/icons-material/Close"

const Header = () => {
  const router = useRouter()
  const {handleSectionchange, footerRef, headerRef} = useContext(SectionContext)

  const [anchorEl, setAnchorEl] = useState(null)
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setisMenuOpen(!isMenuOpen)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const onLogoClick = () => {
    router.push("/")
  }
  return (
    <>
      <header
        className="Header"
        // ref={headerRef}
        ref={headerRef}
      >
        <nav className="Navbar">
          {/* <div style={{ width: "10%" }} className="header-logo-div"> */}
          <span className="flex-1">
            <a href="/">
              <Image
                className="logo-img"
                src={summertime_bikers_logo_3_no_bg}
                alt="nothing"
                onClick={onLogoClick}
              />
            </a>
          </span>
          {/* </div> */}
          <ul className="Nav-links flex-2">
            <li>
              <Link
                href="/"
                className="nav-link-item"
                // onClick={() => handleSectionchange(heroRef)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="about"
                className="nav-link-item"
                // onClick={() => handleSectionchange(experienceRef)}
              >
                About
              </Link>
            </li>
            {/* <li>
              <Link
                href="pricing"
                className="nav-link-item"
                // onClick={() => handleSectionchange(technologiesRef)}
              >
                Pricing
              </Link>
            </li> */}
            <li>
              <Link
                href="callbackGform"
                className="nav-link-item"
                // as={"contactus"}
                // onClick={() => handleSectionchange(footerRef)}
              >
                Contact us
              </Link>
            </li>
          </ul>
          <div className="social-bar-container flex-3">
            <SociealBar />
          </div>
          <div className="menu-container">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <span style={{color: "white"}}>
                {!isMenuOpen ? <MenuIcon /> : <CloseIcon />}
              </span>
            </Button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="header-expand-container">
            <Link
              href="/"
              className="nav-link-item"
              // onClick={() => handleSectionchange(heroRef)}
            >
              Home
            </Link>
            <Link
              href="about"
              className="nav-link-item"
              // onClick={() => handleSectionchange(heroRef)}
            >
              About
            </Link>
            <Link
              href="callbackGform"
              className="nav-link-item"
              // onClick={(e) => handleSectionchange(e,footerRef)}
            >
              Contact us
            </Link>
            <div className="social-bar-container-mobile">
              <SociealBar />
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
