import React, { useEffect, useState } from 'react';
import './Home.css';
import City from '../../components/CityCard/City.js';
import StateCard from '../../components/StateCard/index.js';

export default function Home() {
  const [cities, setCities] = useState();
  const [states, setStates] = useState()

  useEffect(() => {
    fetch('http://localhost:8000/cities?_sort=city&&capital=admin')
      .then(res => res.json())
      .then(data => {
        setCities(data)
        setStates(data)
      });
  }, []);
  return (
    <>
      <div className='container-fluid row'>
        {cities?.map((city) => (
          <City key={city.id} {...city} />
        ))}
      </div>
      {console.log(states)}
      <div className='container-fluid row'>
        {states?.map((city) => (
          <StateCard key={city.lat} {...city} />
        ))}
      </div>
    </>
  );
}