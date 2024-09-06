"use client"
import Header from "@/components/header/Header"
import { useRef as UseRef } from "react"
import { useEffect as UseEffect, useState as UseState } from "react"
import { Card } from "antd"
import Button from "@/components/buttons/Button"
import Link from "next/link"
import "./withLicence.scss"
import StickyGformbtn from "@/components/buttons/StickyGformbtn"
import WarningCard from "@/components/cards/WarningCard"
import WarningCardWrapper from "@/components/cards/WarningCardWrapper"
import PromotionBar from "@/components/PromotionBar/PromotionBar"

const page = () => {
  // const [scrollTop, setScrollTop] = UseState(0)
  const stage1 = UseRef(null)
  const stage2 = UseRef(null)
  const progressbarRef = UseRef(null)
  const beforeCardsContainerRef = UseRef(null)

  const [stage, setStage] = UseState(1)
  const [progressBarSticky, setprogressBarSticky] = UseState(false)
  const onScroll = () => {
    const stickyprogressBarOfset = progressbarRef.current.offsetTop
    if (window.pageYOffset > stickyprogressBarOfset) {
      setprogressBarSticky(true)
    } else {
      setprogressBarSticky(false)
    }
    if (
      stage1.current?.getBoundingClientRect().top -
      69 -
      progressbarRef.current.clientHeight <=
      100
    ) {
      setStage(1)
    }
    if (
      stage2.current?.getBoundingClientRect().top -
      69 -
      progressbarRef.current.clientHeight -
      beforeCardsContainerRef.current.clientHeight <=
      100
    ) {
      setStage(2)
    }
  }
  UseEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  const handleLevelClick = (l) => {
    // setisautomatedScroll(true)
    if (l == 1) {
      window.scroll({
        top:
          stage1.current.offsetTop +
          beforeCardsContainerRef.current.clientHeight -
          25,
        behavior: "smooth",
      })
    } else if (l == 2) {
      window.scroll({
        top:
          stage2.current.offsetTop +
          beforeCardsContainerRef.current.clientHeight -
          60,
        behavior: "smooth",
      })
    }
  }

  const casualtext = "text text-lg  mt-4 italic text-gray-600"
  const gfromInquiryBtn = () => {
    const onbtnClick = () => {
      router.push("/formridirectionpage")
    }
    return (
      <div className="gforminquirybtn">
        <Link href={"/formridirectionpage"}>
          <Button label="Find out how to borrow a Motorcycle" />
        </Link>
      </div>
    )
  }
  return (
    <>
      <div className="main-conatiner-wl">
        <div
          className="before-card-content-wl text-lg"
          ref={beforeCardsContainerRef}
        >
          <div className="text-xl">
            <p>
              If you have a full licence from any other Canadian province or US
              state then you will have to change it to the Nova scotia licence
              in order to obtain a motorcycle licence.
            </p>
            <p className="my-2"> If you have that already then,</p>
          </div>
          <h1 className="text pt-2 before-content-heading">
            Having an NS drivers licence make things much easier
          </h1>
          <br />
          <p>
            You only have two stages to complete. To be honest you just need
            stage 1 completed to get riding on the road. Yes, there are some
            restrictions that are explained later.
          </p>
          <br />
          <h1 className="py-3 font-bold letstalkmoney-heading">
            LET’S TALK <span className="text-black">MONEY</span> FIRST !
          </h1>
          <br />
          <span>Given that you pass everything on the first attempt, </span>
          <span>
            Stage 1 (Knowledge test and Balance test) , that is your
            learner&#39;s licence will cost you
          </span>
          <span className="font-bold"> $15.15 </span>. In stage 2 (Road test),
          you will change your licence to a full licence with a road test which
          will cost you
          <span className="font-bold"> $53 </span>
          <p className="text py-2">
            So
            <span className="font-bold"> $68.15 </span>
            is all you will be spending on a motorcycle licence if you know
            someone who can come with you with a motorcycle for your tests.
          </p>
          <br />
          <p className="text rightplace-para font-bold text-center py-3">
            If you don’t know anyone like that then you are at the{" "}
            <span className="text text-black font-bold">right place</span>. Keep
            reading, you will find out why !
            <br />
          </p>
        </div>
        <div style={{ postion: "relative" }}>
          <PromotionBar />
          <Header />
          <div
            className={`progress-bar-wl ${progressBarSticky ? "progressBarSticky" : ""
              }`}
            ref={progressbarRef}
          >
            <div
              className={`${stage == 1 ? "active-wl" : ""} stage-label-wl`}
              onClick={() => handleLevelClick(1)}
            >
              <div className="stage-progressbar-label-btn-content">
                <p className="font-bold">Stage 1</p>
                <p>Learners Licence</p>
              </div>
            </div>
            <div
              className={`${stage == 2 ? "active-wl" : ""} stage-label-wl`}
              onClick={() => handleLevelClick(2)}
            >
              <div className="stage-progressbar-label-btn-content">
                <p className="font-bold">Stage 2</p>
                <p>Full Licence</p>
              </div>
            </div>
          </div>
        </div>
        <div className="stage-container-wl">
          <div className={`stage-1 p-16`} ref={stage1}>
            <Card className="stage-1-card stage-card">
              <div className="stage-1-wl">
                <h1 className="text pt-2 stage-heading text-center">
                  (STAGE 1)
                </h1>
                <p className="text text-center font-bold stage-subHeading">
                  {" "}
                  INTERIM LEARNER MOTORCYCLE LICENCE
                </p>
                <p className="text text-center stage-subheading-2 font-bold">
                  Class 5 LM
                </p>
                <br />

                <h5 className={`${casualtext}`}>
                  To get this, you have to pass 2 tests:
                </h5>
                <br />

                <ul className="text text-lg mt-3 ">
                  <li>
                    <h4 className="text text-2xl font-bold pt-4">
                      Knowledge Test
                    </h4>
                  </li>
                  <br />
                  <li className="text font-bold pt-3">
                    You need to review the{" "}
                    <a
                      className="text text-blue-700 underline pl-2"
                      href="https://novascotia.ca/sns/rmv/handbook/DH-Chapter8.pdf"
                      target="_blank"
                    >
                      Driver&#39;s Handbook
                    </a>{" "}
                    to prepare for the Knowledge Test.
                  </li>
                  <li className={`${casualtext} pb-3`}>
                    The Knowledge Test assesses your knowledge of the rules for
                    safe motorcycle driving. The test has 20 multiple-choice
                    questions. To pass, you need to answer at least 16
                    correctly.{" "}
                  </li>
                  <li className="pt-1">
                    If you don’t pass the Knowledge Test, you need to pay for
                    another test and take the test again on the spot if it works
                    for you.
                  </li>
                  <br />
                  <li className="pt-1">After you pass the Knowledge Test </li>
                  <li className="pt-1">
                    You need to pass the Balance Test and get your Motorcycle
                    Learner Licence within 12 months of taking the Knowledge
                    Test (If not, you need to take the Knowledge Test again)
                  </li>
                </ul>
              </div>
              <br />
              <br />
              <h4 className="text text-2xl font-bold pt-4">Balance Test</h4>
              <ul className="text text-lg mt-3">
                <li className="pt-4 italic">
                  Balance Tests are only available seasonally (tests are not
                  available from late fall to early spring). Availability also
                  depends on weather conditions.
                </li>

                <li className="pt-1">
                  You need to pass a Balance Test before you can get your
                  Motorcycle Learner Licence. The Balance Test includes basic
                  motorcycle balancing manoeuvres and braking techniques.
                </li>
                <br />
                <li className="pt-2">
                  You need to bring a motorcycle to the test !!{" "}
                </li>
                <li className="text font-bold pt-3">
                  Now the problem comes here for a lot of people BUT not for you
                  !{" "}
                </li>
                <br />

                <li className="pt-2">
                  You need to transport your own or someone else’s motorcycle by
                  trailer or have someone who has a Motorcycle Licence drive it
                  to the test for you (You can’t drive the motorcycle to the
                  test yourself). Your motorcycle must pass a pre-trip
                  inspection before the Balance Test can start. The motorcycle
                  needs to have a valid licence plate and vehicle permit (or
                  temporary vehicle permit). You need to provide proof of motor
                  vehicle inspection(MVI) and insurance for the motorcycle.
                </li>
                <br />
                <li className="text font-bold pt-3">
                  Here we come to the rescue, We will come with you to your test
                  with our Motorcycle !
                </li>

                <li className="text font-bold pt-3">
                  Licence plate, Vehicle permit, MVI, Insurance WE TAKE CARE OF
                  IT ALL !!{" "}
                </li>
                <br />
                <WarningCardWrapper>
                  <p className="text">
                    {" "}
                    It is recommended to do a
                    <a
                      href="https://novascotia.ca/sns/paal/rmv/paal380.asp"
                      className="text text-blue-700 "
                      target="_blank"
                    >
                      {" "}
                      Course
                    </a>{" "}
                    if you do not have experience with motorcycles at all.{" "}
                  </p>
                </WarningCardWrapper>
                <br />
                <p className="text pt-3 ">
                  A driving school might provide you with a motorcycle for your
                  test but it is really expensive and time consuming to do the
                  course. But if you have some experience with motorcycles,
                  maybe an off-road dirt bike or an experience of riding a
                  motorcycle in another country, then it does not really make
                  sense to spend months waiting and $600 to $800!
                  <br />
                  <br />
                </p>
                <li className="text pt-3">
                  Instead, we can do that for way cheaper. Depending upon where
                  you get the appointment, we can be with you for as cheap as
                  <span className="text font-bold"> $199</span>
                </li>
                <br />

                {gfromInquiryBtn()}
                <li className="text pt-3">
                  When you pass those two tests, you will get a paper licence
                  indicating that you are qualified as a Motorcycle Learner!
                </li>

                <li className="text pt-4 font-bold text-xl">
                  Note: Whenever you are driving a motorcycle, you must always
                  carry this licence with you AND you must also carry your
                  regular Driver's Licence with you as well. Until you actually
                  have this licence, you are NOT allowed to drive a motorcycle
                  on any highway.
                </li>
                <br />

                <p className="text pt-3">
                  Once you have this licence, there are special restrictions on
                  your motorcycle driving; see{" "}
                  <a
                    className="text text-blue-700 underline pl-2"
                    href="https://novascotia.ca/sns/rmv/handbook/DH-Chapter8.pdf"
                    target="_blank"
                  >
                    {" "}
                    Additional Information (B).{" "}
                  </a>
                </p>
                <br />
              </ul>

              <br />
            </Card>
          </div>

          <div className={`stage-2 p-10`} ref={stage2}>
            <Card className="stage-2-card stage-card">
              <div className="stage-2-wl">
                <h1 className="text pt-2 stage-heading text-center">
                  (STAGE 2)
                </h1>
                <p className="text text-center font-bold stage-subHeading">
                  {" "}
                  MOTORCYCLE ENDORSEMENT
                </p>
                <br />

                <ul className="text text-lg mt-3 ">
                  <li className="text pt-2">
                    Now that you have got your learner&#39;s licence, you might
                    wanna move to a full licence.
                    <span className="text font-bold">
                      {" "}
                      To get a regular Motorcycle Endorsement, you have to do 3
                      things
                    </span>
                  </li>
                  <br />
                  <ul className="list-disc list-inside">
                    <li>Have an Interim Learner Motorcycle Licence.</li>
                    <li>Complete a waiting period of 3 months.</li>
                    <li>
                      Pass &quot;Advanced skills&quot; test. Which is another
                      road test (Driving Examination).
                    </li>
                  </ul>

                  <li className={`${casualtext} ml-4`}>
                    You need to bring a motorcycle to the test !!
                  </li>
                  <br />

                  <li className="text pt-3">
                    Your motorcycle must pass a pre-trip inspection before the
                    Balance Test can start. The motorcycle needs to have a valid
                    licence plate and vehicle permit (or temporary vehicle
                    permit). You need to provide proof of motor vehicle
                    inspection(MVI) and insurance for the motorcycle.
                  </li>
                  <li className="text pt-4 font-bold text-xl">
                    Here we come to the rescue, We will come with you to your
                    test with our Motorcycle !
                  </li>
                  <br />
                  <h5 className="text text-xl pt-3">
                    Licence plate, Vehicle permit, MVI, Insurance WE TAKE CARE
                    OF IT ALL !!
                  </h5>
                  <br />

                  <li className="text pt-3">
                    A driving school might provide you with a motorcycle for
                    your test but it is really expensive and time consuming to
                    do the course. You can also borrow someone else’s bike or
                    buy your own. Which is difficult and/or expensive.
                  </li>
                  <li className="text pt-3">
                    Instead, we can do that for way cheaper. Depending upon
                    where you get the appointment, we can be with you for as
                    cheap as
                    <span className="text font-bold"> $199</span>
                  </li>

                  <br />
                  {gfromInquiryBtn()}
                  <li className="text pt-3">
                    Once you fulfil those 3 requirements, a Motorcycle
                    Endorsement is placed on your regular Driver&#39;s Licence .
                    (This is in the form of a large letter: A, D, etc.) There is
                    no further waiting period, and all special driving
                    restrictions are lifted.Cost for this endorsement is $11.99{" "}
                  </li>
                </ul>
              </div>
              <br />
              <br />
              <br />
            </Card>
            <div className="mb-10">
              <WarningCard />
            </div>
          </div>
        </div>
      </div>
      <StickyGformbtn />
    </>
  )
}

export default page
