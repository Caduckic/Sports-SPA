import React from "react";
import Welcome from "./Welcome";
import News from "./News";
import Tickets from "./Tickets";
import Merchandise from "./Merchandise";

/*
  used for rendering all the main section components of the webapp
*/

const Main = () => {
  return (
    <main className="Main">
      <Welcome />
      <section className="LowerMain">
        <News />
        <Tickets />
        <Merchandise />
      </section>
    </main>
  )
}

export default Main;