import React from 'react';
import './App.css';
import { useRoutes } from "react-router-dom";
import routes from "./routes.js";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      {router}
    </>
  )
}

export default App;
