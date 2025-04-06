"use client"
import Header from "@/components/header/Header"
import {useRef as UseRef} from "react"
import {useEffect as UseEffect, useState as UseState} from "react"
import {Card} from "antd"
import "./withoutLicence.scss"
import StickyGformbtn from "@/components/buttons/StickyGformbtn"
import StickyEstimateBtn from "@/components/buttons/StickyEstimateBtn"
import Button from "@/components/buttons/Button"
import {useRouter as UseRouter} from "next/navigation"
import Link from "next/link"
import WarningCard from "@/components/cards/WarningCard"
import WarningCardWrapper from "../../components/cards/WarningCardWrapper"
import PromotionBar from "@/components/PromotionBar/PromotionBar"
const page = () => {
  const level1 = UseRef(null)
  const level2 = UseRef(null)
  const level3 = UseRef(null)
  const progressbarRef = UseRef(null)
  const [level, setlevel] = UseState(1)
  const router = UseRouter()
  const [progressBarSticky, setprogressBarSticky] = UseState(false)
  // const [levelintitalPositions, setlevelintitalPositions] = UseState(null)
  const onScroll = (e) => {
    const stickyprogressBarOfset = progressbarRef.current.offsetTop
    if (window.pageYOffset > stickyprogressBarOfset) {
      setprogressBarSticky(true)
    } else {
      setprogressBarSticky(false)
    }
    if (
      level1.current?.getBoundingClientRect().top -
        69 -
        progressbarRef.current?.clientHeight <=
      0
    ) {
      setlevel(1)
    }
    if (
      level2.current?.getBoundingClientRect().top -
        69 -
        progressbarRef.current?.clientHeight <=
      100
    ) {
      setlevel(2)
    }
    if (
      level3.current?.getBoundingClientRect().top -
        69 -
        progressbarRef.current?.clientHeight <=
      100
    ) {
      setlevel(3)
    }
  }
  UseEffect(() => {
    // Fires when the document view has been scrolled
    const scrollEventListener = window.addEventListener("scroll", onScroll)
    // setlevelintitalPositions({
    //   level1: level1.current.getBoundingClientRect().top,
    //   level2: level2.current.getBoundingClientRect().top,
    //   level3: level3.current.getBoundingClientRect().top,
    // })
    handleLevelClick(1)
    //
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleLevelClick = (l) => {
    if (l == 1) {
      window.scroll({
        top:
          // levelintitalPositions.level1 -
          level1.current.offsetTop,
        // - 69 - progressbarRef.current.clientHeight
        // .current.getBoundingClientRect().top
        behavior: "smooth",
      })
      // setlevel(1)
    } else if (l == 2) {
      window.scroll({
        top:
          // levelintitalPositions.level2 -
          level2.current.offsetTop,
        // - 69 - progressbarRef.current.clientHeight
        // .current.getBoundingClientRect().top

        behavior: "smooth",
      })
      // setlevel(2)
    } else if (l == 3) {
      window.scroll({
        top:
          // levelintitalPositions.level3 -
          level3.current.offsetTop,
        // .current.getBoundingClientRect().top
        // 69 -progressbarRef.current.clientHeight
        behavior: "smooth",
      })
      // setlevel(3)
    }
    // setisautomatedScroll(false)
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
      <div className="main-conatiner">
        <div className="before-card-content font-bold">
          <p>
            If you do not hold any drivers licence then you will have to go
            through the general learners licence before you can appear for a
            motorcycle learners licence(Online test and Balance test).{" "}
          </p>
          <p className="my-8 afterwich-para">
            After which, you will need to do a road test in order to get a full
            licence. The final level will be to remove the restrictions.
          </p>
          <p className={`mt-2 ${casualtext} text-lg`}>
            All three levels are explained below!
          </p>
        </div>
        <PromotionBar />
        <Header />
        <div 
          className={`progress-bar ${progressBarSticky ? "progressBarSticky" : ""}`}
          ref={progressbarRef}
        >
          <div
            className={`${level == 1 ? "active" : ""} level-label`}
            onClick={() => handleLevelClick(1)}
          >
            <div className="level-progressbar-label-btn-content">
              <p className="font-bold"> Level 1 </p>
              <p>Learners Licence</p>
            </div>
          </div>
          <div
            className={`${level == 2 ? "active" : ""} level-label`}
            onClick={() => handleLevelClick(2)}
          >
            <div className="level-progressbar-label-btn-content">
              <p className="font-bold"> Level 2</p>
              <p>Full Licence</p>
            </div>
          </div>
          <div
            className={`${level == 3 ? "active" : ""} level-label`}
            onClick={() => handleLevelClick(3)}
          >
            <div className="level-progressbar-label-btn-content">
              <p className="font-bold"> Level 3</p>
              <p>Restrictions Lifted</p>
            </div>
          </div>
        </div>
        <div className="level-container ">
          <div className={`level-1 `} ref={level1}>
            <Card className="level-1-card level-card">
              <h1 className="text pt-2 level-heading text-center">(Level 1)</h1>
              <p className="text text-center font-bold level-subHeading">
                {" "}
                Learner Motorcycle Licence{" "}
              </p>
              <p className="text text-center level-subheading-2 font-bold">
                Class LM
              </p>
              <div className="stage-1">
                <h5 className={`${casualtext}`}>So, it has two stages</h5>
                <h2 className="capitalize mt-4 stage-heading">Stage 1</h2>
                <ul className="text text-lg mt-3 ">
                  <li>
                    <span className="font-bold">
                      Get yourself a class 7 licence
                    </span>{" "}
                    (General Learner&#39;s licence)
                  </li>
                  <li className="pt-4">
                    This is the learner&#39;s licence that you will need in any
                    case you wanna be driving a car or riding a motorcycle on
                    public roads.
                  </li>
                  <li className="text font-bold pt-3">How to do that?</li>
                  <li className={`${casualtext} pb-3`}>
                    We will let the government take the lead here
                  </li>
                  <li className="pt-1">
                    Go pass your test today! Make Sure to read chapters 1-6 from
                    <a
                      href="https://novascotia.ca/sns/rmv/safe/handbook.asp"
                      target="_blank"
                      className="text text-blue-700 underline pl-2"
                    >
                      Driver&#39;s Handbook
                    </a>
                  </li>
                  <li className="pt-1">
                    We heard that you can do the{" "}
                    <a
                      className="text text-blue-700 underline"
                      href="https://beta.novascotia.ca/take-driver-knowledge-test-learners-licence-class-7"
                      target="_blank"
                    >
                      test
                    </a>{" "}
                    online.
                  </li>
                  <li className="pt-1">
                    Follow the next step after you have passed, All the best!
                  </li>
                </ul>
              </div>
              <h2 className=" capitalize mt-4 stage-heading">Stage 2</h2>
              <ul className="text text-lg mt-3">
                <li>
                  <span className="font-bold">
                    Get motorcycle learner&#39;s licence
                  </span>
                </li>
                <li className="pt-4 italic">
                  To be honest you just need till stage 2 completed to get
                  riding on the road. Yes, there are some restrictions that are
                  explained later This comes in two parts,
                </li>
                <li className="text font-bold pt-3">A knowledge test</li>
                <li className={`${casualtext}`}>What you're tested on ? </li>
                <li className="pt-1">
                  You need to review the
                  <a
                    className="text text-blue-700 underline pl-2"
                    target="_blank"
                    href="https://novascotia.ca/sns/rmv/handbook/DH-Chapter8.pdf"
                  >
                    Driver's Handbook{" "}
                  </a>
                  to prepare for the Knowledge Test.
                </li>
                <li className="pt-2">
                  The Knowledge Test assesses your knowledge of the rules for
                  safe motorcycle driving. The test has 20 multiple-choice
                  questions. To pass, you need to answer at least 16 correctly.
                </li>
                <li className="pt-2">
                  If you don't pass the Knowledge Test, you need to pay for
                  another test and take the test again on the spot if it works
                  for you.
                </li>
                <li className="text font-bold pt-3">
                  After you pass the Knowledge Test
                </li>
                <li className="text pt-3">
                  You need to pass the Balance Test and get your Motorcycle
                  Learner Licence within 12 months of taking the Knowledge Test.
                  (If not, then you will need to take the Knowledge test again.)
                </li>
                <br />
                <h4 className="text text-2xl font-bold pt-4">Balance Test</h4>
                <li className="text pt-3">
                  Balance Tests are only available seasonally (tests are not
                  available from late fall to early spring). Availability also
                  depends on weather conditions.
                </li>
                <li className="text pt-3">
                  You need to pass a Balance test before you can get your
                  Motorcycle Learner Licence. The Balance test includes basic
                  motorcycle balancing manoeuvres and braking techniques.
                </li>
                <br />
                <WarningCardWrapper>
                  <p className="text">
                    {" "}
                    It is recommended to do a{" "}
                    <a
                      href="https://novascotia.ca/sns/paal/rmv/paal380.asp"
                      className="text text-blue-700"
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
                </p>
                <br />

                <li className="text pt-4 font-bold text-xl">
                  You need to bring a motorcycle to the test !!
                </li>
                <br />

                <h4 className="text pt-4 font-bold">
                  Now the problem comes here for a lot of people BUT not for
                  you. Because we can help you in that!
                </h4>

                <p className="text pt-3">
                  You need to transport your own or someone else's motorcycle by
                  trailer or have someone who has a Motorcycle Licence drive it
                  to the test for you (you can't drive the motorcycle to the
                  test yourself). Your motorcycle must pass a pre-trip
                  inspection before the Balance Test can start. The motorcycle
                  needs to have a valid licence plate and vehicle permit (or
                  temporary vehicle permit). You need to provide proof of motor
                  vehicle inspection(MVI) and insurance for the motorcycle.
                </p>

                <h5 className="text text-xl font-bold pt-3">
                  Here we come to the rescue, We will come with you to your test
                  with our Motorcycle !
                </h5>
                <br />
                <h5 className="text text-xl pt-3">
                  Licence plate, Vehicle permit, MVI, Insurance WE TAKE CARE OF
                  IT ALL !!
                </h5>

                {/* https://novascotia.ca/sns/paal/rmv/paal380.asp */}
                <li className="text pt-3">
                  We can do that for way cheaper. Depending upon where you get
                  the appointment, we can be with you for as cheap as
                  <span className="text text-black font-bold"> $199</span>
                </li>
                <br />
              </ul>
              {gfromInquiryBtn()}
            </Card>
          </div>

          <div className={`level-2`} ref={level2}>
            <Card className="level-2-card level-card">
              <div className="stage-2">
                <h1 className="text pt-2 level-heading text-center">
                  (Level 2)
                </h1>
                <p className="text text-center font-bold level-subHeading">
                  {" "}
                  Newly Licenced Motorcycle Driver's Licence{" "}
                </p>
                <p className="text text-center level-subheading-2 font-bold">
                  {" "}
                  Class 6N
                </p>
                <br />
                <ul className="text text-lg mt-3 ">
                  <li className="text pt-2">
                    This is basically changing your learners licence to a full
                    licence. To get this, you have to have your{" "}
                    <span className="text font-bold">
                      {" "}
                      Learner Motorcycle Licence{" "}
                    </span>
                    and pass an &quot;Advanced skills&quot; test (which is a{" "}
                    <span className="test font-bold"> Road test </span> Driving
                    Examination)
                  </li>
                  <br />
                  <li className="text pt-3">
                    Complete a{" "}
                    <span className="text font-bold">Practice period </span> .
                    Before you can take your &quot;Advanced skills&quot; road
                    test, you usually need to have your Learner's Motorcycle
                    Licence for at least 6 months.
                  </li>
                  <li className={`${casualtext} ml-4`}>
                    However, that can be reduced to 3 months if you pass an
                    approved motorcycle driver training course.
                  </li>
                  <br />
                  <li className="text pt-4 font-bold text-xl">
                    Again, You need to bring a motorcycle to the test !!{" "}
                  </li>

                  <li className="text pt-3">
                    Your motorcycle must pass a pre-trip inspection before the
                    Balance Test can start. The motorcycle needs to have a valid
                    licence plate and vehicle permit (or temporary vehicle
                    permit). You need to provide proof of motor vehicle
                    inspection(MVI) and insurance for the motorcycle.
                  </li>
                  <br />

                  <li className="text pt-4 font-bold text-xl">
                    Here we come to the rescue, We will come with you to your
                    test with our Motorcycle !{" "}
                  </li>
                  <h5 className="text text-xl pt-3">
                    Licence plate, Vehicle permit, MVI, Insurance WE TAKE CARE
                    OF IT ALL !!
                  </h5>
                  <br />

                  <li className="text pt-3">
                    A driving school might provide you with a motorcycle for
                    your test but it is really expensive and time consuming to
                    do the course. You can also borrow someone else's bike or
                    buy your own. Which is difficult and/or expensive.
                  </li>
                  <li className="text pt-3">
                    Instead, we can do that for way cheaper. Depending upon
                    where you get the appointment, we can be with you for as
                    cheap as
                    <span className="text font-bold"> $199</span>
                  </li>
                  <br />

                  <li className="text text-center pt-5 font-bold">
                    The fee for this test is $53.00 (tax included). An
                    appointment is required. See the{" "}
                    <a
                      href="https://novascotia.ca/sns/paal/rmv/paal379.asp#additionalF"
                      className="text text-blue-700 underline"
                      target="_blank"
                    >
                      {" "}
                      Newly Licenced Driver's Licence, Additional
                      Information (F)
                    </a>
                    , on how to arrange a road test. See also the N.S.
                    Driver's Handbook.
                  </li>
                  <li className="text text-center pt-5 font-bold">
                    Once you have this licence, there are special restrictions
                    on your motorcycle driving; see
                    <a
                      href="https://novascotia.ca/sns/paal/rmv/paal380.asp#add%20C"
                      className="text text-blue-700 underline"
                      target="_blank"
                    >
                      {" "}
                      Additional Information (C).
                    </a>
                  </li>
                  <br />
                </ul>
              </div>
              {gfromInquiryBtn()}
            </Card>
          </div>
          <div className={`level-3`} ref={level3}>
            <Card className="level-3-card level-card">
              <div className="stage-3">
                <h1 className="text pt-2 level-heading text-center">
                  (Level 3)
                </h1>
                <p className="text text-center font-bold level-subHeading">
                  {" "}
                  Restricted Individual with Condition 47
                </p>
                <br />

                <ul className="text text-lg mt-3 ">
                  <li className="text pt-2">
                    For motorcycle drivers, this is the third level in the
                    Graduated Driver Licensing system. To graduate to this stage
                    you have to do 3 things:
                  </li>

                  <ul className="text  flex flex-col  pt-3 table list-inside list-decimal">
                    <li className="text  pt-3">
                      Have a{" "}
                      <span className="text font-bold">
                        {" "}
                        Newly Licensed Motorcycle Driver's Licence{" "}
                      </span>
                    </li>
                    <li className="text  pt-3">
                      Complete a{" "}
                      <span className="text font-bold">driving period </span> of
                      at least <span className="text font-bold">2 years. </span>
                    </li>
                    <li className="text py-3">
                      Pass an approved motorcycle{" "}
                      <span className="text font-bold">
                        Driver Improvement Program
                      </span>{" "}
                      (including a 6-hour &quot;Defensive driving&quot; course).
                    </li>
                    <br />
                  </ul>

                  <li>
                    Refer to access nova scotia website to know more about{" "}
                    <a
                      href="https://novascotia.ca/sns/paal/rmv/paal380.asp"
                      target="_blank"
                      className="text text-blue-700 underline"
                    >
                      Defensive driving course
                    </a>
                    <br />
                  </li>
                  <li className="text pt-2">
                    Once the 2 year driving period has been completed, you will
                    exit the Graduated Driver Licence system and become a fully
                    experienced driver. After graduating, all the conditions and
                    restrictions associated with the Graduated Driver Licence
                    will be removed.
                  </li>
                </ul>
              </div>
            </Card>
            <WarningCard />
          </div>
        </div>
      </div>
      <StickyEstimateBtn />
      <StickyGformbtn />
    </>
  )
}

export default page
