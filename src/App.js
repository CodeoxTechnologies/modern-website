import React from "react";
import { Blog, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import { CTA, Navbar } from "./components";

import "./App.css";
import Brand from "./components/brand/Brand";
import Features from "./containers/feature/Features";

const App = () => (
  <div>
    <div>
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
  </div>
);

export default App;
