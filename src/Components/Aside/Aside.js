import React from "react";
import Membership from "./Membership";
import SportsWidget from "./SportsWidget";

/*
  used to render the aside elements of the webpage, it is handed login state props to give to membership
*/

const Aside = ({ loggedIn, setLoggedIn }) => {
  return (
    <aside className="AsideSection">
      <Membership loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <SportsWidget />
    </aside>
  )
}

export default Aside;