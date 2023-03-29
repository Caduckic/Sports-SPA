import React from "react";

const merchItems = [
  "shirt", "hat", "football", "mini flags"
]

const MerchItem = ({ index, name }) => {
  return (
    <li key={index} className="MerchItem" id={name}>
      <figure>
        <img src={require("../../images/club_logo.jpg")} alt={name} />
        <figcaption>shirt</figcaption> 
      </figure>
    </li>
  )
}

const Merchandise = () => {
  return (
    <section className="MerchSection">
      <section className="TextContainer">
        <h3>Merch</h3>
        <ul className="MerchGrid">
          <li className="MerchItem" id="shirt">
            <figure>
              <img src={require("../../images/club_logo.jpg")} alt="shirt" />
              <figcaption>shirt</figcaption> 
            </figure>
          </li>
          <li className="MerchItem" id="hat">
            <figure>
              <img src={require("../../images/club_logo.jpg")} alt="hat" />
              <figcaption>hat</figcaption> 
            </figure>
          </li>
          <li className="MerchItem" id="football">
            <figure>
              <img src={require("../../images/club_logo.jpg")} alt="football" />
              <figcaption>football</figcaption> 
            </figure>
          </li>
          <li className="MerchItem" id="mini_flags">
            <figure>
              <img src={require("../../images/club_logo.jpg")} alt="mini flags" />
              <figcaption>mini flags</figcaption> 
            </figure>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Merchandise;