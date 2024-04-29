"use client"
import Header from "@/components/header/Header"
import React, {useRef} from "react"
import {useEffect, useState} from "react"
import {Card} from "antd"
import "./withLicence.scss"
const page = () => {
  const [scrollTop, setScrollTop] = useState(0)
  const stage1 = useRef(null)
  const stage2 = useRef(null)
  const stage3 = useRef(null)
  const progressbarRef = useRef(null)

  const [stage, setStage] = useState(1)
  const onScroll = () => {
    if (
      stage1.current.getBoundingClientRect().top -
        69 -
        progressbarRef.current.clientHeight <=
      0
    ) {
      setStage(1)
    }
    if (
      stage2.current.getBoundingClientRect().top -
        69 -
        progressbarRef.current.clientHeight <=
      0
    ) {
      setStage(2)
    }
   
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  
  const casualtext = "text text-lg  mt-4 italic text-gray-600"
  return (
    <div className="main-conatiner">
      <div style={{postion: "relative"}}>
        <Header />
        <div className="progress-bar" ref={progressbarRef}>
          <div className={`${stage == 1 ? "active" : ""} stage-label`}>
            stage 1
          </div>
          <div className={`${stage == 2 ? "active" : ""} stage-label`}>
            stage 2
          </div>
        </div>
      </div>
      <div className="stage-container">
        <div className={`stage-1 p-10`} ref={stage1}>
          <Card hoverable className="stage-1-card">
            <div className="stage-1">
              <h1 className="text text-center text-2xl pt-2">
                (LEVEL 1) LEARNER MOTORCYCLE LICENCE (CLASS LM)
              </h1>
              <h5 className={`${casualtext}`}>So, it has two stages</h5>
              <h2 className=" text-2xl capitalize lg:max-w-lg font-bold text-blue-600 mt-4">
                Stage 1
              </h2>
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
                    target={"_blank"}
                    className="text text-blue-700 underline pl-2"
                  >
                    Driver&#39;s Handbook
                  </a>
                </li>
                <li className="pt-1">
                  We heard that you can do the test online.
                </li>
                <li className="pt-1">
                  Follow the next step after you have passed, All the best!
                </li>
              </ul>
            </div>
            <h2 className=" text-2xl capitalize lg:max-w-lg font-bold text-blue-600 mt-7">
              Stage 2
            </h2>
            <ul className="text text-lg mt-3">
              <li>
                <span className="font-bold">
                  Get motorcycle learner&#39;s licence
                </span>
              </li>
              <li className="pt-4 italic">
                To be honest you just need till stage 2 completed to get riding
                on the road. Yes, there are some restrictions that are explained
                later This comes in two parts,
              </li>
              <li className="text font-bold pt-3">A knowledge test</li>
              <li className={`${casualtext}`}>What you’re tested on ? </li>
              <li className="pt-1">
                Go pass your test today! Make Sure to read chapters 1-6 from
                <a
                  className="text text-blue-700 underline pl-2"
                  target={"_blank"}
                  href="https://novascotia.ca/sns/rmv/handbook/DH-Chapter8.pdf"
                >
                  Driver&#39;s Handbook
                </a>
              </li>
              <li className="pt-2">
                The Knowledge Test assesses your knowledge of the rules for safe
                motorcycle driving. The test has 20 multiple-choice questions.
                To pass, you need to answer at least 16 correctly.
              </li>
              <li className="pt-2">
                If you don’t pass the Knowledge Test, you need to pay for
                another test and take the test again on the spot if it works for
                you
              </li>
              <li className="text font-bold pt-3">
                After you pass the Knowledge Test
              </li>
              <li className="text pt-3">
                You need to pass the Balance Test and get your Motorcycle
                Learner Licence within 12 months of taking the Knowledge Test
                (if not, you need to take the Knowledge Test again)
              </li>

              <h4 className="text text-2xl font-bold pt-4">Balance Test</h4>
              <li className="text pt-3">
                Balance Tests are only available seasonally (tests are not
                available from late fall to early spring). Availability also
                depends on weather conditions.
              </li>
              <li className="text pt-3">
                You need to pass a Balance Test before you can get your
                Motorcycle Learner Licence. The Balance Test includes basic
                motorcycle balancing manoeuvres and braking techniques.
              </li>

              <li className="text pt-4 font-bold text-xl">
                You need to bring a motorcycle to the test !!
              </li>

              <h4 className="text pt-4 font-bold">
                Now the problem comes here for a lot of people BUT not for you
              </h4>

              <p className="text pt-3">
                You need to transport your own or someone else’s motorcycle by
                trailer or have someone who has a Motorcycle Licence drive it to
                the test for you (you can’t drive the motorcycle to the test
                yourself). Your motorcycle must pass a pre-trip inspection
                before the Balance Test can start. The motorcycle needs to have
                a valid licence plate and vehicle permit (or temporary vehicle
                permit). You need to provide proof of motor vehicle
                inspection(MVI) and insurance for the motorcycle.
              </p>

              <h4 className="text text-xl font-bold pt-3">
                Here we come to a rescue !
              </h4>
              <h5 className="text text-xl font-bold pt-3">
                We will come with you to your test with our Motorcycle !
              </h5>
              <h5 className="text text-xl pt-3">
                Licence plate, Vehicle permit, MVI, Insurance WE TAKE CARE OF IT
                ALL !!
              </h5>

              <p className="text pt-3">
                A driving school might provide you with a motorcycle for your
                test but it is really expensive and time consuming to do the
                course. It is recommended to do a course if you do not have
                experience with motorcycles at all. But if you have some
                experience with motorcycles, maybe an off-road dirt bike or an
                experience of riding in another country, then it does not really
                make sense to spend months waiting and $600 to $800!
              </p>
              <li className="text pt-3">
                Instead, we can do that for way cheaper. Depending upon where
                you get the appointment, we can be with you for as cheap as $199
              </li>
            </ul>
          </Card>
        </div>

        <div className={`stage-2 p-10`} ref={stage2}>
          <Card hoverable className="stage-2-card">
            <div className="stage-2">
              <h1 className="text text-center text-2xl pt-2">
                (LEVEL 2) NEWLY LICENSED MOTORCYCLE DRIVER&#39;S LICENCE (CLASS
                6N).
              </h1>
              <ul className="text text-lg mt-3 ">
                <li className="text pt-2">
                  To get this, you have to have your{" "}
                  <span className="text font-bold">
                    {" "}
                    Learner Motorcycle Licence{" "}
                  </span>
                  and pass an &quot;advanced skills&quot; test (which is a{" "}
                  <span className="test font-bold"> Road test </span> Driving
                  Examination)
                </li>
                <li className="text pt-3">
                  Complete a{" "}
                  <span className="text font-bold">practice period </span> .
                  Before you can take your &quot;advanced skills&quot; road
                  test, you usually need to have your Learner&#39;s Motorcycle
                  Licence for at least 6 months.
                </li>
                <li className={`${casualtext} ml-4`}>
                  However, that can be reduced to 3 months if you pass an
                  approved motorcycle driver training course.
                </li>
                <li className="text pt-4 font-bold text-xl">
                  Again, You need to bring a motorcycle to the test !!{" "}
                </li>
                <h4 className="text pt-4 font-bold">
                  Now the problem comes here again for a lot of people BUT not
                  for you !{" "}
                </h4>
                <li className="text pt-3">
                  Your motorcycle must pass a pre-trip inspection before the
                  Balance Test can start. The motorcycle needs to have a valid
                  licence plate and vehicle permit (or temporary vehicle
                  permit). You need to provide proof of motor vehicle
                  inspection(MVI) and insurance for the motorcycle.
                </li>
                <li className="text pt-4 font-bold text-xl">
                  Here we come to a rescue !
                </li>
                <li className="text pt-4 font-bold text-xl">
                  We will come with you to your test with our Motorcycle !{" "}
                </li>
                <h5 className="text text-xl pt-3">
                  Licence plate, Vehicle permit, MVI, Insurance WE TAKE CARE OF
                  IT ALL !!
                </h5>

                <li className="text pt-3">
                  A driving school might provide you with a motorcycle for your
                  test but it is really expensive and time consuming to do the
                  course. You can also borrow someone else’s bike or buy your
                  own. Which is difficult and/or expensive.
                </li>
                <li className="text pt-3">
                  Instead, we can do that for way cheaper. Depending upon where
                  you get the appointment, we can be with you for as cheap as
                  <span className="text font-bold"> $199</span>
                </li>

                <li className="text text-center pt-5 font-bold">
                  The fee for this test is $53.00 (tax included). An appointment
                  is required. See the{" "}
                  <a
                    href="https://novascotia.ca/sns/paal/rmv/paal379.asp#additionalF"
                    className="text text-blue-700 underline"
                  >
                    {" "}
                    Newly Licenced Driver&#39;s Licence, Additional Information
                    (F)
                  </a>
                  , on how to arrange a road test. See also the N.S.
                  Driver&#39;s Handbook.
                </li>
                <li className="text text-center pt-5 font-bold">
                  Once you have this licence, there are special restrictions on
                  your motorcycle driving; see
                  <a
                    href="https://novascotia.ca/sns/paal/rmv/paal380.asp#add%20C"
                    className="text text-blue-700 underline"
                  >
                    {" "}
                    Additional Information (C).
                  </a>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default page
