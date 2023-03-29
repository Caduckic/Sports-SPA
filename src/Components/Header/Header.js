import React from "react";

const Header = () => {
  return (
    <div>
      <figure className="Logo">
        <a><img src={require("../../images/club_logo.jpg")} alt="homepage" /></a>
        <figcaption>Club Logo</figcaption>
      </figure>
      <header className="Header">
        <h1>Sports Club</h1>
      </header>
    </div>
  )
}

export default Header;