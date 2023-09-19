import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [startup, setStartup] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartup(false);
    }, 120000000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <Router>
      <Preloader startup={startup} />
    </Router>

  );
}

export default App;
