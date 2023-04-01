import React from "react";
import LoadingHOC from "../LoadingHOC";

const merchItems = [
  "shirt", "hat", "football", "mini flags"
]

const MerchItem = ({ name }) => {
  return (
    <li className="MerchItem" id={name}>
      <figure>
        <img src={require("../../images/club_logo.jpg")} alt={name} />
        <figcaption>shirt</figcaption>
      </figure>
    </li>
  )
}

const LoadingMerchItem = LoadingHOC(MerchItem);

const Merchandise = () => {
  return (
    <section className="MerchSection">
      <section className="TextContainer">
        <h3>Merch</h3>
        <ul className="MerchGrid">
          {merchItems.map((item, index) => 
            <LoadingMerchItem key={index} name={item} />
          )}
        </ul>
      </section>
    </section>
  )
}

export default Merchandise;