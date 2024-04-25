"use client"
// import {shoe8} from "../assets/images"
import {useContext} from "react"
import Button from "../Button"
import {SectionContext} from "../context/SectionScrollContext"
import {Card} from "antd"
import "./moreinfoHomePage.scss"
const MoreInfoSection = () => {
  const {moreInfoRef} = useContext(SectionContext)

  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      ref={moreInfoRef}
    >
      <div className="flex flex-1 align-middle flex-col">
      
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          Who Needs This
          <span className="text-blue-600"> Licence?</span>
          {/* <span className="text-blue-600">Quality </span> */}
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Anyone living in Nova Scotia, who wants to operate a motorcycle on
          public roads and highways, needs either.
        </p>
        <p className="mt-6 lg:max-w-lg info-text p-5">
          <ol className="list-decimal ">
            <li className="my-2">
              A separate Motorcycle Driver&#39;s Licence, or.
            </li>
            <li className="">
              An add-on to their regular Driver&#39;s Licence (called an
              &quot;endorsement&quot;) -- which lets them drive a motorcycle as
              well as a regular passenger vehicle.
            </li>
          </ol>
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          {" "}
          Visitors or newcomers who already have a valid Motorcycle Driver
          Licence from another part of Canada, or from another country, can
          drive in Nova Scotia for up to 90 days without getting a Nova Scotia
          Motorcycle Driver&#39;s Licence. After that, you need a Nova Scotia
          licence.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div
        className="flex-1 flex justify-around items-center flex-col h-max"
        style={{height: "100%"}}
      >
        <Card hoverable bordered={true} style={{width: 240}} cover={<div>test</div>}></Card>
        <Card hoverable style={{width: 240}} cover={<div>test</div>}></Card>
      </div>
    </section>
  )
}

export default MoreInfoSection
