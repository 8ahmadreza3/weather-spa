import React from 'react';
import './App.css';
import { useRoutes } from "react-router-dom";
import routes from "./routes.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const router = useRoutes(routes);
  return (
    <>
      {router}
    </>
  )
}

export default App;
