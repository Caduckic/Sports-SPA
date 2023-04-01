import React, { useState } from "react";
import LoginForm from "./LoginForm";
import UserInfo from "./UserInfo";

/*
  This component handles if the login form or user info is shown, it's handed login state from the top.
  login state might be better used with a library like redux but this works for now.
*/

const Membership = ({ loggedIn, setLoggedIn }) => {
  const [username, setUsername] = useState('')

  const handleLogin = (e, email, password) => {
    e.preventDefault()
    if (!email.includes("@")) {
      alert(`${email} is not a valid email`)
      return
    }
    if (password.length < 3) {
      alert("password is too short")
      return
    }

    setUsername(email.split('@')[0])
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setUsername('')
    setLoggedIn(false)
  }
  
  return (
    <section className="MembershipSection" id="membership">
      <section className="TextContainer">
        {!loggedIn 
          ? 
            <LoginForm handleLogin={handleLogin}/>
          : <UserInfo username={username} handleLogout={handleLogout} />
        }
      </section>
    </section>
  )
}

export default Membership;