import React, { useState } from "react";
import LoginForm from "./LoginForm";
import UserInfo from "./UserInfo";

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
    <section className="MembershipSection">
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