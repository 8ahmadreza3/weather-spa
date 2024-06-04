import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function State() {
  const {state} = useParams()
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:8000/cities?admin_name=${state}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  return (
    <div className='container-fluid'>
      {data?.map((city) => (
        <div key={city.id} className='card'>
          <Link to={"/cities/" + city.city } className="btn btn-primary">See City</Link>
        </div>
      ))}
    </div>
  )
}
