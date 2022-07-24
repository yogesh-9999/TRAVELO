// import logo from './logo.svg';
import "./App.css";

import { Whychooseus } from "./components/Reviewpage/Whychooseus";
import { Doctor2 } from "./components/Reviewpage/Doctor2";
import { Navbar } from "./components/Navbar/Navbar";


import { Footer } from "./components/Footer/Footer";

import { Stations } from "./components/Railways/Stations";
// import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Whychooseus />
      <Stations />
      <Doctor2 />
    
      <Footer />

    </div>
  );
}

export default App;
