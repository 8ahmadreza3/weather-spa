import React from 'react';
import './App.css';
import { useRoutes } from "react-router-dom";
import routes from "./routes.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherNavbar from './components/Navbar'

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <WeatherNavbar/>
      <div className='mt-5 bg_darkblue'>
        {router}
      </div>
    </>
  )
}

export default App;
