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
            className="underline cursor-pointer text-white hover:text-gray-200"
          >
            Find out how to borrow a Motorcycle for your test
          </Link>
        </span>
      </div>
    </div>
  )
}

export default PromotionBar
