import React from "react";
import LoadingHOC from "../LoadingHOC";

// used to fill the list of merch items
const merchItems = [
  "shirt", "hat", "football", "mini flags"
]

// used to make the map function in Merchandise more readable and clean
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

// I wrap MerchItem in the LoadingHOC I made to make it appear as if the image is loading
const LoadingMerchItem = LoadingHOC(MerchItem);

// used for displaying the merchandise of the webpage, it uses the same image as the logo because I don't want to have to photoshop haha
const Merchandise = () => {
  return (
    <section className="MerchSection" id="merchandise">
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