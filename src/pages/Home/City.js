import React from 'react'
import City6 from "./City6.js"
import City5 from "./City5.js"
import City4 from "./City4.js"
import City3 from "./City3.js"
import City2 from "./City2.js"
import City1 from "./City1.js"

export default function City() {
  return (
    <div className="cardm">
      <div className="card">
        <City1 />
        <div className="main">23 °C</div>
        <div className="mainsub">Dunmore, Ireland</div>
      </div>
      <div className="card2">
        <div className="upper">
          <div className="humidity">
            <div className="humiditytext">Humidity<br />30%</div>
            <City2 />
          </div>
          <div className="air">
            <div className="airtext">Wind<br />8 Km/h</div>
            <City3 />
          </div>
        </div>
        <div className="lower">
          <div className="aqi">
            <City4 />
            <div className="aqitext">AQI<br />30</div>
          </div>
          <div className="realfeel">
            <City5 />
            <div className="realfeeltext">Real Feel<br />21 °C</div>
          </div>
          <div className="pressure">
            <City6 />
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
