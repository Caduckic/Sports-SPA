import React, { useState } from "react";

/*
  Basic login form with login fuction handed to it through props
*/

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className="SignUp" name="sign_up" onSubmit={(e) => handleLogin(e, email, password)}>
      <h3>Sign Up</h3>
      <ul className="Inputs">
        <li>
          <label htmlFor="email">Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" />
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" />
        </li>
      </ul>
      <p>
        <button id="log" type="submit" aria-label="submit" value="Submit">Submit</button>
      </p>
    </form>
  )
}

export default LoginForm