'use client';

import React from "react";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Tooltip } from "antd";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import "./stickyEstimateBtn.scss";

const StickyEstimateBtn = () => {
  const pathname = usePathname();

  // Don't show the button on the estimate page
  if (pathname === '/estimate') {
    return null;
  }

  return (
    <Tooltip title="Click Here to Get a Cost Estimate" placement="top" arrow>
      <div className="sticky-button estimate-icon-wrapper">
        <Link href="/estimate">
          <CalculateIcon className="button-icon estimate-icon" />
        </Link>
      </div>
    </Tooltip>
  );
};

export default StickyEstimateBtn; 