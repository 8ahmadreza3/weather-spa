/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import './Home.css'
import City from '../../components/CityCard/City.js'

export default function Home() {
  const [cities, setCities] = useState([])

  useEffect(()  => {
    fetch('http://localhost:8000/cities?capital=admin')
      .then(res =>
        res.json()
      ).then(data => setCities(data))
  }, [])
  console.log(cities);

  return (
    <div className='d-flex bg-primary'>
      {cities?.map((city) => {
        <City {...city} />
      })}
    </div>
  )
}
