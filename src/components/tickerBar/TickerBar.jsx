import React from "react"
import Ticker, {NewsTicker} from "nice-react-ticker"
import "./ticker.scss"
const TickerBar = () => {
  return (
    <div className="tickerbar-container">
      <Ticker>
        <NewsTicker
          id={2}
          // icon={icon}
          title="summertimebikers promotions are available, Please checkout for more information "
          //   url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed"
          meta="11:10:20"
        />
      </Ticker>
    </div>
  )
}

export default TickerBar
