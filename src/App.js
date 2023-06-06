import { Header,HeaderPhone } from "./components/Header";
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { Timeline } from "./components/Timeline";
import { Testimonials } from "./components/Testimonials";
import "./style/app.css"
import "./style/mediaquery.css"
import { Services } from "./components/Services";
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { useState } from "react";
//npm i framer-motion react-icons sass react-hot-toast typewriter-effect react-responsive-carousel firebase

function App() {

  const [MenuOpen,setMenuOpen]=useState(false);

  return (
    <Router>
      <Header MenuOpen={MenuOpen} setMenuOpen={setMenuOpen}/>
      <HeaderPhone MenuOpen={MenuOpen} setMenuOpen={setMenuOpen}/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/work" element={<Work/>}/>
       <Route path="/timeline" element={<Timeline/>}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/testimonials" element={<Testimonials/>}/>
      </Routes>
    </Router>
  );
}

export default App;
