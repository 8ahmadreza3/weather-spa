import React from 'react'
import Pressure from "./Pressure.js"
import RealFeel from "./RealFeel.js"
import AQI from "./AQI.js"
import Wind from "./Wind.js"
import Humidity from "./Humidity.js"
import CityCard from "./CityCard.js"
import './CityCard.css'

export default function City() {
  return (
    <div className="cardm">
      <div className="card">
        <CityCard />
        <div className="main">23 °C</div>
        <div className="mainsub">Dunmore, Ireland</div>
      </div>
      <div className="card2">
        <div className="upper">
          <div className="humidity">
            <div className="humiditytext">Humidity<br />30%</div>
            <Humidity />
          </div>
          <div className="air">
            <div className="airtext">Wind<br />8 Km/h</div>
            <Wind />
          </div>
        </div>
        <div className="lower">
          <div className="aqi">
            <AQI />
            <div className="aqitext">AQI<br />30</div>
          </div>
          <div className="realfeel">
            <RealFeel />
            <div className="realfeeltext">Real Feel<br />21 °C</div>
          </div>
          <div className="pressure">
            <Pressure />
            <div className="pressuretext">Pressure<br />1012 mbar</div>
          </div>
          <div className="card3">
            Healthy
          </div>
        </div> 
      </div>
    </div>
  )
}
