import React from "react";
import Membership from "./Membership";
import SportsWidget from "./SportsWidget";

const Aside = () => {
  return (
    <aside className="AsideSection">
      <Membership />
      <SportsWidget />
    </aside>
  )
}

export default Aside;