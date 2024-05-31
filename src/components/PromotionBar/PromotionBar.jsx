"use client"
import React, {useContext} from "react"
import "./promotionbar.scss"
import {SectionContext} from "../context/SectionScrollContext"
import Link from "next/link"
const PromotionBar = () => {
  const {PromotionBarRef} = useContext(SectionContext)

  return (
    <div className="promotionbar-container" ref={PromotionBarRef}>
      <div className="promotionbar-content-container">
        <span>
          <Link
            href={"/formridirectionpage"}
            className="underline cursor-pointer"
          >
            Findout How to borrow a MotorCycle for your Test
          </Link>
        </span>
      </div>
    </div>
  )
}

export default PromotionBar
