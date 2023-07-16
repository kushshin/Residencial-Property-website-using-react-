import "./App.css";
import Hero from "./Components/Hero/Hero";
import React from "react";
import Header from "./Components/Header/Header";
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";


function App() {
  return (<div>
    <Header />
    <Hero />
    <Companies />
    <Residencies />
    <Value />
    <Contact />
    <GetStarted />
    <Footer />
  </div>)



}

export default App;
