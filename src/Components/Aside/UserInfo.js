import React, {Fragment} from "react";
import LoadingHOC from "../LoadingHOC";

const UserInfo = ({ username, handleLogout }) => {
  return (
    <Fragment>
      <h3>Hi { username }</h3>
      <button onClick={handleLogout}>Log out</button>
    </Fragment>
  )
}

export default LoadingHOC(UserInfo)