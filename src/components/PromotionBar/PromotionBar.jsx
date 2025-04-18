"use client"
import React, { useContext } from "react"
import "./promotionbar.scss"
import { SectionContext } from "../context/SectionScrollContext"
import Link from "next/link"
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

const PromotionBar = () => {
  const { PromotionBarRef } = useContext(SectionContext)
  return (
    <div className="promotionbar-container" ref={PromotionBarRef}>
      <div className="promotionbar-content-container">
        <Link
          href={"/formridirectionpage"}
          className="promo-link"
        >
          {/* <DirectionsBikeIcon className="bike-icon" /> */}
          <span className="promo-text">
            Find out how to borrow a Motorcycle for your test
            <span className="action-text">Click here!</span>
          </span>
        </Link>
      </div>
    </div>
  )
}
export default PromotionBar
