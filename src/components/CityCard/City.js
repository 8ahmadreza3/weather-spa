import React, { useEffect, useState } from 'react'
import Pressure from "./Pressure.js"
import RealFeel from "./RealFeel.js"
import AQI from "./AQI.js"
import Wind from "./Wind.js"
import Humidity from "./Humidity.js"
import CityCard from "./CityCard.js"
import './CityCard.css'

export default function City(props) {
  const { lat, lng } = props
  const [data , setData] = useState()
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5f68fdf35d395cceae836812dfbde224`)
    .then(res => res.json())
    .then(data => setData(data))
    console.log(data);
  },[])
  return (
    <div className='card'>
    <div className="cardm">
      <div className="city_card">
        <CityCard />
        <div className="main">{data?.main.temp} °C</div>
        <div className="mainsub">{data? data.name : ''} {data? ', ' + data.sys.country : ''}</div>
      </div>
      <div className="city_card2">
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
          <div className="city_card3">
            Healthy
          </div>
        </div> 
      </div>
    </div>
    </div>
  )
}
