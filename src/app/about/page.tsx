import React from 'react'
import './AboutPage.scss'
import Header from '@/components/header/Header'

const About = () => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: '75px' }}>
        <h2>About Summertime Bikers</h2>
        <li>
          At Summertime Bikers Halifax, we help people get their motorcycle licence in Nova Scotia. As of now, our services include.
        </li>

        <ul>
          <li>
            Breaking down the process to get motorcycle licence in Nova Scotia and provide information.
          </li>
          <li>
            Assessing current licence status for our clients and suggest the most efficient way to get licenced.
          </li>
          <li>
            Providing our clients a motorcycle to get their test done for a nominal fee.
          </li>
          <li>
            Also providing them with the safety gear (Helmet, Gloves, Etc.) required for the test.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About