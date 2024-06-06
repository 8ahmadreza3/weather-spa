import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function City() {
  const {city} = useParams()
  const [cityData, setCityData] = useState()
  const [data, setData] = useState()
  useEffect(()=>{
    fetch(`http://localhost:8000/cities?city=${city}`)
      .then(res => res.json())
      .then(data => setCityData(data[0]));
    if(cityData){
      const {lat, lng} = cityData
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5f68fdf35d395cceae836812dfbde224`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
    }
  }, [])
  return (
    <div className='container-fluid'>
      <div>
        
      </div>
    </div>
  )
}
