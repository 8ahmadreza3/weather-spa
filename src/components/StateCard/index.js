import React from 'react'
import { Link } from 'react-router-dom'

export default function StateCard({ admin_name, city }) {
  return (
    <div className='my-3 col-xl-2 col-lg-3 col-md-4 col-sm-6'>
      <div className="card">
        <div className="card-body m-auto p-0">
          <div className="card-title">
            {admin_name}
          </div>
          <div className='d-flex'>
            {city}
          </div >
          <Link to={"states/" + admin_name} className="btn btn-primary">See Cities</Link>
        </div>
      </div>
    </div>
  )
}
