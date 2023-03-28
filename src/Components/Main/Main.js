import React from "react";
import Welcome from "./Welcome";
import News from "./News";
import Tickets from "./Tickets";
import Merchandise from "./Merchandise";

const Main = () => {
  return (
    <div className="main_body">
      <main>
        <Welcome />
        <section id="lower_main">
          <News />
          <Tickets />
          <Merchandise />
        </section>
      </main>
    </div>
  )
}

export default Main;