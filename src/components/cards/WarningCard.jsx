import React from "react"
import {Card} from "antd"
import WarningIcon from "@mui/icons-material/Warning"
import "./warningcard.scss"
const WarningCard = () => {
  return (
    <div className="waring-card-container">
      {" "}
      <Card hoverable>
        <div className="warning-card-inner-container">
          <WarningIcon />
          <span className="waring-text-container">
            For most updated and detailed information, refer to{" "}
            <a href="https://novascotia.ca/" target='_blank' className="text-blue-700 underline">
              novascotia.ca
            </a>
          </span>
        </div>
      </Card>
    </div>
  )
}

export default WarningCard
