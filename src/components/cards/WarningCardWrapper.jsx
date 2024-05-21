import React from "react"
import {Card} from "antd"
import "./warningcardwrapper.scss"
const WarningCardWrapper = ({children}) => {
  return (
    <Card className="warning-course-recommendation">
      {children}
      {/* <p className="text">
        {" "}
        It is recommended to do a{" "}
        <a
          href="https://novascotia.ca/sns/paal/rmv/paal380.asp"
          className="text text-blue-700 underline"
          target="_blank"
        >
          {" "}
          Course
        </a>{" "}
        if you do not have experience with motorcycles at all.{" "}
      </p> */}
    </Card>
  )
}

export default WarningCardWrapper
