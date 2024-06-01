import React, { useEffect, useState } from 'react';
import './Home.css';
import City from '../../components/CityCard/City.js';

export default function Home() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/cities?city=shiraz')
      .then(res => res.json())
      .then(data => setCities(data));
  }, []);
  return (
    <div className=' p-5'>
      {cities?.map((city) => (
        <City key={city.id} {...city} />
      ))}
    </div>
  );
}