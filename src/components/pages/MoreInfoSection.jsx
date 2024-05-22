"use client"
// import {shoe8} from "../assets/images"
import {useContext} from "react"
import {SectionContext} from "../context/SectionScrollContext"
import {Card} from "antd"
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
      <h2 className="more-info-heading capitalize font-bold ">
        <span className="whoNeedsthis"> Get Your Motorcycle Licence in </span>
        <span className="text-black ">Nova Scotia</span>
        {/* <span className="text-blue-600">Quality </span> */}
      </h2>
      <div bordered="true" className="more-info-parent-card ">
        <div className="flex justify-between items-start max-lg:flex-col w-full max-container parent-flex-container">
          <div className="flex flex-1 flex-col align-top  content-outer-div">
            <div className="content-inner-div">
              <p className="mt-1  info-text-para">
                Anyone living in
                <span className="text font-bold text-neutral-700">
                  {" "}
                  Nova Scotia
                </span>
                , who wants to operate a motorcycle on
                <span className="text font-bold text-neutral-700">
                  {" "}
                  public roads and highways
                </span>
                , needs either a{" "}
                <span className="text font-bold text-neutral-700">
                  separate{" "}
                </span>
                Motorcycle Driver's Licence or add an
                <span className="text font-bold text-neutral-700">
                  {" "}
                  endorsement
                </span>{" "}
                on to their regular Driver's Licence.This will let them drive a
                motorcycle as well as a regular passenger vehicle.
              </p>
            </div>
          </div>
          <Card className="options-parent-container">
            <div>
              <h1 className="selectOptionHeading">
                Select The{" "}
                <span className="text text-black">
                  Option Which Applies to You
                </span>
              </h1>
            </div>
            <div
              className=" flex justify-between items-center card-1-div card-common-div"
              // style={{height: "100%", position: "relative"}}
              onClick={() => navigateToInfoPage("withoutLicence")}
            >
              <Card
                hoverable
                bordered="true"
                // style={{
                //   width: 400,
                //   //  border: "2px solid orange"
                // }}
                className="card-1 card"
                cover={
                  <div className="card-cover-conatiner">
                    <div className="text pt-2 licence-options-heading text-center">
                      <span className="text text-black">You Don’t</span> have a
                      regular <p> Driver's Licence</p>
                    </div>
                    <p className="text p-3 font-palanquin  text-justify info-text info-text ">
                      You don't have a valid licence from Nova Scotia or any
                      other Provice
                    </p>
                    {/* <div className="text text-center text-2xl eyeIcon-Wrapper">
                  <VisibilityIcon className="eyeIcon" />
                </div> */}
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
                bordered="true"
                // style={{
                //   width: 400,
                //   // border: "2px solid green"
                // }}
                className="card-2 card"
                cover={
                  <div className="card-cover-conatiner">
                    <div className="text pt-2 licence-options-heading text-center">
                      <span className="text text-black"> You have</span> a
                      regular <p> Driver's Licence</p>
                    </div>
                    <p className="text p-3 font-palanquin text-justify info-text info-text ">
                      You have a Valid Class 5, Class 7 or a licence from any
                      other Province
                    </p>
                    {/* <div className="text text-center text-2xl eyeIcon-Wrapper">
                  <VisibilityIcon className="eyeIcon" />
                </div> */}
                  </div>
                }
              ></Card>
            </div>
          </Card>
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
