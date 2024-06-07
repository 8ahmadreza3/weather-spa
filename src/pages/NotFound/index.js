import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import badWeather from './—Pngtree—ve_3773496.png'

function NotFound() {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='pt-5'>
          <p className='notfound'>404</p>
        </div>
        <div className=''>
          <Image className='bad-weather' src={badWeather} />
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <p className='fs-1 m-auto'>Page Not Found !!!</p>
      </div>
      <div className='d-flex justify-content-center mt-5'>
        <Link className='btn btn-primary' to='/'>Go To HomePage</Link>
      </div>
    </>
  );
}

export default NotFound;