"use client"
import React, {useContext} from "react"
import Image from "../../../node_modules/next/image"
import {SectionContext} from "../context/SectionScrollContext"
import more_info_bg from "../../../public/more_info_bg.jpg"
import {Card} from "antd"
import logo from "../../../public/logo.svg"
import "./moreinfoHomePage.scss"
const MoreInfoHomePage = () => {
  const {moreInfoRef} = useContext(SectionContext)
  const {Meta} = Card
  const gridStyle = {
    width: "100%",
    textAlign: "center",
    cursor: "pointer",
  }
  return (
    <div className="more-info-outer-container">
      <div className="more-info-left-side">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            flexDirection: "column",
          }}
        >
          <legend className="text dark:text-black font-bold text-4xl mt-10 ">
            Who Needs This Licence?
          </legend>
          <span className="text text-black text-xl my-7  ">
            Anyone living in Nova Scotia, who wants to operate a motorcycle on
            public roads and highways, needs either.
          </span>
          <ol className="text text-black  list-decimal text-xl ordered-list">
            <li className="more-info-ol-list-item">
              A separate Motorcycle Driver&#39;s Licence, or.
            </li>
            <li className="more-info-ol-list-item">
              An add-on to their regular Driver&#39;s Licence (called an
              &quot;endorsement&quot;) -- which lets them drive a motorcycle as
              well as a regular passenger vehicle.
            </li>
          </ol>
          <span className="info-para text text-black  my-10">
            Visitors or newcomers who already have a valid Motorcycle Driver
            Licence from another part of Canada, or from another country, can
            drive in Nova Scotia for up to 90 days without getting a Nova Scotia
            Motorcycle Driver&#39;s Licence. After that, you need a Nova Scotia
            licence.
          </span>
        </div>
      </div>
      <div ref={moreInfoRef} className="more-info-right-side">
        <Card
          hoverable
          style={{width: 240}}
          cover={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                flexDirection: "column",
              }}
            >
              <h1 className="text text-2xl">Class 5</h1>
              <span className="text text-black  ">
                Anyone living in Nova Scotia, who wants to operate a motorcycle
                on public roads and highways, needs either.
              </span>
            </div>
            // <img
            //   alt="example"
            //   // src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            // />
          }
        >
          {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        </Card>

        <Card
          hoverable
          // style={{width: 240,backgroundColor:'grey'}}
          className="card"
          cover={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                flexDirection: "column",
              }}
            >
              <h1 className="text text-2xl">Class 5</h1>
              <span className="text text-black  ">
                Anyone living in Nova Scotia, who wants to operate a motorcycle
                on public roads and highways, needs either.
              </span>
            </div>
            // <img
            //   alt="example"
            //   // src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            // />
          }
        >
          {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        </Card>
      </div>
    </div>
  )
}

export default MoreInfoHomePage
