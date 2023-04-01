import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import "./App.css"

// renders the whole app, I have login state here at this top level so I can pass it to any component I need to
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div id="App">
      <Header />
      <Navigation />
      <section className="MainBody">
        <Main />
        <Aside loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      </section>
      <Footer />
    </div>
  )
}

export default App;
