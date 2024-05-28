"use client"

import React, {useContext, useState} from "react"
import Ticker, {FinancialTicker, NewsTicker} from "nice-react-ticker"

import "./ticker.scss"

const TickerBar = () => {
  return (
    <>
      <div className="tickerbar">
        <div className="newsticker">
          <Ticker isNewsTicker={true} slideSpeed={45}>
            <NewsTicker
              id="1"
              title="Blue passports to be issued to Brits for the first time in decades next month decades next month decades next month decades next month"
              url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed"
            />
            <NewsTicker
              id="1"
              title="Blue passports to be issued to Brits for the first time in decades next month decades next month decades next month decades next month"
              url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed"
              // meta="11:10:20"
            />
            <NewsTicker
              id="1"
              title="Blue passports to be issued to Brits for the first time in decades next month decades next month decades next month decades next month"
              url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed"
              // meta="11:10:20"
            />
          </Ticker>
        </div>
      </div>
    </>
  )
}

export default TickerBar
