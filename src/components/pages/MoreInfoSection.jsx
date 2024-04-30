"use client"
// import {shoe8} from "../assets/images"
import {useContext} from "react"
import Button from "../Button"
import {SectionContext} from "../context/SectionScrollContext"
import {Card} from "antd"
import VisibilityIcon from "@mui/icons-material/Visibility"
import "./moreinfoHomePage.scss"
import {useRouter} from "next/navigation"
const MoreInfoSection = () => {
  const {moreInfoRef} = useContext(SectionContext)
  const router = useRouter()

  const navigateToInfoPage = (option) => {
    if (option === "withoutLicence") {
      router.push("/withoutLicence")
    } else {
      router.push("/withLicence")
    }
  }
  return (
    <section id="about-us" ref={moreInfoRef}>
      <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container parent-flex-1-container">
        <div className="flex flex-1 flex-col align-middle  content-outer-div">
          <div className="content-inner-div">
            <h2 className=" text-4xl capitalize lg:max-w-lg font-bold">
              Who Needs This
              <span className="text-blue-600"> Licence?</span>
              {/* <span className="text-blue-600">Quality </span> */}
            </h2>
            <p className="mt-4 lg:max-w-lg info-text-para">
              Anyone living in Nova Scotia, who wants to operate a motorcycle on
              public roads and highways, needs either.
            </p>
            <span className="mt-6 lg:max-w-lg p-5 info-text-span">
              <ol className="list-disc">
                <li className="my-2">
                  A separate Motorcycle Driver's Licence, or.
                </li>
                <li className="">
                  An add-on to their regular Driver's Licence (called an
                  'endorsement') -- which lets them drive a motorcycle
                  as well as a regular passenger vehicle.
                </li>
              </ol>
            </span>
            {/* <div className="mt-11">
          <Button label="View details" />
        </div> */}
          </div>
        </div>
        <div
          className=" flex justify-between items-center card-1-div card-common-div"
          // style={{height: "100%", position: "relative"}}
          onClick={() => navigateToInfoPage("withoutLicence")}
        >
          <Card
            hoverable
            bordered={true}
            // style={{
            //   width: 400,
            //   //  border: "2px solid orange"
            // }}
            className="card-1 card"
            cover={
              <div className="card-cover-conatiner">
                <div className="text text-center text-2xl my-4">
                  You Don’t have a regular Driver's Licence
                </div>
                <p className="text p-3 font-palanquin text-justify info-text ">
                  You don't have a Valid Class 7 Licence or You don't have a
                  Licence From any Other Country
                </p>
                <div className="text text-center text-2xl eyeIcon-Wrapper">
                  <VisibilityIcon className="eyeIcon" />
                </div>
              </div>
            }
          ></Card>
        </div>
        <div
          className=" flex justify-between items-center card-2-div card-common-div"
          // style={{height: "100%", position: "relative"}}
          onClick={() => navigateToInfoPage("withLicence")}
        >
          <Card
            hoverable
            bordered={true}
            // style={{
            //   width: 400,
            //   // border: "2px solid green"
            // }}
            className="card-2 card"
            cover={
              <div className="card-cover-conatiner">
                <div className="text text-center text-2xl my-4 ">
                  You have a regular Driver's Licence
                </div>
                <p className="text p-3 font-palanquin text-justify info-text ">
                  You have a Valid Class 7 Licence or You Do have a Licence From
                  any Other Countries
                </p>
                <div className="text text-center text-2xl eyeIcon-Wrapper">
                  <VisibilityIcon className="eyeIcon" />
                </div>
              </div>
            }
          ></Card>
        </div>
      </div>
      {/* <div className="extra-info-div">
        <p className="mt-6 info-text extra-info-para">
          Visitors or newcomers who already have a valid Motorcycle Driver
          Licence from another part of Canada, or from another country, can
          drive in Nova Scotia for up to 90 days without getting a Nova Scotia
          Motorcycle Driver&#39;s Licence. After that, you need a Nova Scotia
          licence.
        </p>
      </div> */}
    </section>
  )
}

export default MoreInfoSection
