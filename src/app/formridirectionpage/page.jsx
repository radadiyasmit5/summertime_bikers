"use client"

import React from "react"
import BikeAnimationPage from "../../components/bikeAnimationPage/BikeAnimationPage.js"
import Header from "@/components/header/Header.jsx"
import "./formridirection.scss"
import {Card} from "antd"
import Button from "@/components/buttons/Button.jsx"
import Link from "next/link.js"
const page = () => {
  return (
    <div>
      <Header />
      <div className="ridirection-page-main-container">
        <div className="ridirect-content-container">
          {/* <Card> */}
          <div>
            <p className="borrowing-para">
              Borrowing a motorcycle for your test could be quite a challenging
              task.
            </p>
            <br />

            <p>
              As you don’t have a valid licence, no rental company can rent out
              a bike to you. Even if you can find a motorcycle, you cannot drive
              it to the test centre because you are not licensed in the first
              place.
            </p>
            <br />
            <p className="fill-gap-para">We are here to fill that exact GAP!</p>
            <br />
            <p>
              Submit all your contact details and basic information to find out
              how much it will cost to get one of our motorcycles directly to
              your test centre to complete your Balance/Road test.
            </p>
          </div>
          <div className="ridirect-content-btn">
            <Link href={'callbackGform'} target='_blank'>
              <Button label={"Fill out a Form"} />
            </Link>
          </div>
        </div>
        <div className="bikerAnimation-container">
          <BikeAnimationPage />
        </div>
      </div>
    </div>
  )
}

export default page
