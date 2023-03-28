import React from "react";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import "./App.css"

const App = () => {
  return (
    <div id="app">
      <Header />
      <Navigation />
      <section id="main_body">
        <Main />
        <Aside />
      </section>
      <Footer />
    </div>
  )
}

export default App;
