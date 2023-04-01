import React from "react";

/*
  Navigation section to direct you to the areas of the page,
  now I was told this wasn't working before and it was for me so I'm not sure where the issue is,
  try zooming in the page to see if when you click it takes you to that part.
*/

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul>
        <li><a href="#membership">MEMBERSHIP</a></li>
        <li><a href="#news">NEWS</a></li>
        <li><a href="#merchandise">MERCHANDISE</a></li>
        <li><a href="#tickets">TICKETS</a></li>
        <li><a href="#live_sports">LIVE SPORTS</a></li>
      </ul>
    </nav>
  )
}

export default Navigation;