"use client"
// import { Link, Outlet } from "react-router-dom"
import Link from "next/link"
import React, { useContext, useState, useEffect } from "react"
import "./header.scss"
import '../../app/main.scss'
import summertime_bikers_logo_3_no_bg from "../../../public/summertime_bikers_logo_3_no_bg.png"
import Image from "next/image"
import SociealBar from "./socielBar/SocielBar"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { useRouter } from "next/navigation"
import { SectionContext } from "../context/SectionScrollContext"

const Header = () => {
  const router = useRouter()
  const { handleSectionchange, footerRef, headerRef } = useContext(SectionContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false)
    }
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (path) => {
    setIsMenuOpen(false)
    router.push(path)
  }

  return (
    <header className="Header" ref={headerRef}>
      <nav className="Navbar">
        <span className="flex-1">
          <Link href="/">
            <Image
              className="logo-img"
              src={summertime_bikers_logo_3_no_bg}
              alt="Summertime Bikers Logo"
              priority
            />
          </Link>
        </span>
        <ul className="Nav-links flex-2">
          <li>
            <Link href="/" className="nav-link-item">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link-item">
              About
            </Link>
          </li>
          <li>
            <Link href="/callbackGform" className="nav-link-item">
              Contact us
            </Link>
          </li>
        </ul>
        <div className="social-bar-container flex-3">
          <SociealBar />
        </div>
        <button
          className="menu-container"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span style={{ color: "white" }}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </span>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="header-expand-container">
          <Link
            href="/"
            className="nav-link-item"
            onClick={() => handleNavClick('/')}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="nav-link-item"
            onClick={() => handleNavClick('/about')}
          >
            About
          </Link>
          <Link
            href="/callbackGform"
            className="nav-link-item"
            onClick={() => handleNavClick('/callbackGform')}
          >
            Contact us
          </Link>
          <div className="social-bar-container-mobile">
            <SociealBar />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
