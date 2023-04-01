import React from "react";
import Membership from "./Membership";
import SportsWidget from "./SportsWidget";

const Aside = ({ loggedIn, setLoggedIn }) => {
  return (
    <aside className="AsideSection">
      <Membership loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <SportsWidget />
    </aside>
  )
}

export default Aside;