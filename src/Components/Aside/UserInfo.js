import React, {Fragment} from "react";
import LoadingHOC from "../LoadingHOC";

/*
  This component shows user info after a login is performed, it's very basic but does in my mind show interactive data processing features.
  basically it gets the username from the login form and says hi to that username
*/

const UserInfo = ({ username, handleLogout }) => {
  return (
    <Fragment>
      <h3>Hi { username }</h3>
      <button onClick={handleLogout}>Log out</button>
    </Fragment>
  )
}

export default LoadingHOC(UserInfo)