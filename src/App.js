import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { NavBar } from "./componenets";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
