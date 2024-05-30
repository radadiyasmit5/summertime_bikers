"use client"
import React, {useContext} from "react"
import "./promotionbar.scss"
import {SectionContext} from "../context/SectionScrollContext"
const PromotionBar = () => {
  const {PromotionBarRef} = useContext(SectionContext)

  return (
    <div className="promotionbar-container" ref={PromotionBarRef}>
      <div className="promotionbar-content-container">
        <span>
          <a
            href="https://google.com"
            className="underline cursor-pointer"
            target="_blank"
          >
            Findout more for discounts
          </a>
        </span>
      </div>
    </div>
  )
}

export default PromotionBar
