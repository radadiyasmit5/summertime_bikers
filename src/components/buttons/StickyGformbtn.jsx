"use client"
import React from "react"
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports"
import { Tooltip } from "antd"

import "./stickyGfrombtn.scss"
import Link from "../../../node_modules/next/link"
const StickyGformbtn = () => {
  return (
    <Tooltip title="Click Here to Submit an Inquiry" placement="top" arrow>
      <div className="helmets-icon-wrapper">
        <Link target='_blank' href="winterBreak">
          <SportsMotorsportsIcon className="helmet-icon" />
        </Link>
      </div>
    </Tooltip>
  )
}

export default StickyGformbtn
