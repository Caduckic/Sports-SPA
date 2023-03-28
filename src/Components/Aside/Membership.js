import React from "react";

const Membership = () => {
  return (
    <section id="membership">
      <section className="text_container">
        <form id="sign_up" name="sign_up" action="#" method="post">
          <h3 id="login_state">Sign Up</h3>
          <ul id="inputs">
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