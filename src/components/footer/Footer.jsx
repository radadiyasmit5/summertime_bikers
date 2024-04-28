"use client"
import React, {useContext} from "react"
import "./footer.scss"
import {SectionContext} from "../context/SectionScrollContext"
const Footer = () => {
  const {footerRef} = useContext(SectionContext)

  return (
    <section id="footer" ref={footerRef}>
      <div className="footer-main-container">
        <div className="footer-flex-1">
          <div></div>
          <div></div>
        </div>
        <div className="footer-flex-2">Hello</div>
      </div>
    </section>
  )
}

export default Footer
