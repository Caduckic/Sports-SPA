import React from "react";

const merchItems = [
  "shirt", "hat", "football", "mini flags"
]

const MerchItem = ({ index, name }) => {
  return (
    <li key={index} className="merch_item" id={name}>
      <figure>
        <img src={require("../../images/club_logo.jpg")} alt={name} />
        <figcaption>shirt</figcaption> 
      </figure>
    </li>
  )
}

const Merchandise = () => {
  return (
    <section id="merchandise">
      <section className="text_container">
        <h3>Merch</h3>
        <ul id="merch_grid">
          <li className="merch_item" id="shirt">
            <figure>
              <img src={require("../../images/club_logo.jpg")} alt="shirt" />
              <figcaption>shirt</figcaption> 
            </figure>
          </li>
          <li className="merch_item" id="hat">
            <figure>
              <img src={require("../../images/club_logo.jpg")} alt="hat" />
              <figcaption>hat</figcaption> 
            </figure>
          </li>
          <li className="merch_item" id="football">
            <figure>
              <img src={require("../../images/club_logo.jpg")} alt="football" />
              <figcaption>football</figcaption> 
            </figure>
          </li>
          <li className="merch_item" id="mini_flags">
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