"use client"
import React from "react"
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports"
import {Tooltip} from "antd"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import "./stickyGfrombtn.scss"

const StickyGformbtn = () => {
  const pathname = usePathname();

  // Don't show the button on the gforminquiry page
  if (pathname === '/callbackGform') {
    return null;
  }

  return (
    <Tooltip title="Click Here to Submit an Inquiry" placement="top" arrow>
      <div className="sticky-button helmets-icon-wrapper">
        <Link href="/callbackGform">
          <SportsMotorsportsIcon className="button-icon helmet-icon" />
        </Link>
      </div>
    </Tooltip>
  )
}

export default StickyGformbtn
