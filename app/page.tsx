import React from "react";
import Header from "./components/Header/header";
import Footer  from "./components/Footer/footer";
import Hero from "./components/Hero/hero";
import Styles from "../app/page.module.css"

export const Home = () => {
  return (
    <div>
      <Header/>
      <Footer/>
      <Hero/>
    </div>
  )
}

export default Home;
