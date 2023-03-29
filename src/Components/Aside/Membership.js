import React from "react";

const Membership = () => {
  return (
    <section className="MembershipSection">
      <section className="TextContainer">
        <form className="SignUp" name="sign_up" action="#" method="post">
          <h3>Sign Up</h3>
          <ul className="Inputs">
            <li>
              <label for="email">Email</label>
              <input type="text" id="email" name="email" />
            </li>
            <li>
              <label for="password">Password</label>
              <input type="password" id="password" name="password" />
            </li>
          </ul>
          <p>
            <button id="log" type="submit" aria-label="submit" value="Submit">Submit</button>
          </p>
        </form>
      </section>
    </section>
  )
}

export default Membership;