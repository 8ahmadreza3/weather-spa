import React, { useEffect, useState } from 'react'
import Pressure from "./Pressure.js"
import RealFeel from "./RealFeel.js"
import AQI from "./AQI.js"
import Wind from "./Wind.js"
import Humidity from "./Humidity.js"
import CityCard from "./CityCard.js"
import './CityCard.css'
import { Link } from 'react-router-dom'

export default function City(props) {
  const { lat, lng } = props
  const [data, setData] = useState()
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5f68fdf35d395cceae836812dfbde224`)
      .then(res => res.json())
      .then(data => setData(data))
    console.log(data);
  }, [])

  return (
    <div className="card col-4">
      <CityCard />
      <div className="card-body">
        <div className="card-title">
          <div className="main">
            {data ? Math.round((data.main.temp - 273.15) * 10) / 10 : ''} °C
          </div>
          <div className="mainsub">
            <p className='fs-5'>{data ? data.name : ''}{data ? ', ' + data.sys.country : ''}</p>
          </div>
        </div>
        <div className="states">
          <Humidity />
          humidity<br />{data?.main.humidity}%
        </div>
        <div className="states">
          <Wind />
          Wind<br />{data ? Math.round(data.wind.speed * 16.0934) / 10 : ''} Km/h
        </div>
        <div className="states">
          <AQI />
          AQI<br />30
        </div>
        <div className="states">
          <RealFeel />
          Real Feel<br />{data ? Math.round((data.main.feels_like - 273.15) * 10) / 10 : ''} °C
        </div>
        <div className="pressuretext">
          <Pressure />
          Pressure<br />{data?.main.pressure}mbar
        </div>
        <Link to={props.city} className="btn btn-primary">See All</Link>
      </div>
    </div>
  )
}
