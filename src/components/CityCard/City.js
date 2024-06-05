import React, { useEffect, useState } from 'react'
import Pressure from "./Pressure.js"
import RealFeel from "./RealFeel.js"
import AQI from "./AQI.js"
import Wind from "./Wind.js"
import Humidity from "./Humidity.js"
import './CityCard.css'
import { Link } from 'react-router-dom'
import ReactAnimatedWeather from 'react-animated-weather';

export default function City(props) {
  const { lat, lng } = props
  const [data, setData] = useState()
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5f68fdf35d395cceae836812dfbde224&units=metric`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className='my-3 col-xl-2 col-lg-3 col-md-4 col-sm-6'>
      <div className="card city-card p-0">
        <div className="card-body m-auto p-0">
          <div className="card-title">
            <div className="d-flex">
              <ReactAnimatedWeather icon={'CLEAR_DAY'} color={'goldenrod'} size={85} animate={true}/>
              <p className='fs-5'>{props ? props.city : ''}
                <br />
                {data ? data.main.temp : ''} °C</p>
            </div>
          </div>
          <div className='d-flex'>
            <div className=''>
              <div className="m-2">
                <Humidity /><br />
                humidity<br />{data?.main.humidity}%
              </div>
              <div className="m-2">
                <Pressure /><br />
                Pressure<br />{data?.main.pressure}mbar
              </div>
            </div>
            <div>
              <div className="m-2">
                <RealFeel /><br />
                Real Feel<br />{data ? data.main.feels_like : ''}°C
              </div>
              <div className="m-2">
                <Wind /><br />
                Wind<br />{data ? Math.round(data.wind.speed * 16.0934) / 10 : ''} Km/h
              </div>
            </div>
          </div >
          <Link to={"cities/" + props.city} className="btn btn-primary">See Statistics</Link>
        </div>
      </div>
    </div>
  )
}
