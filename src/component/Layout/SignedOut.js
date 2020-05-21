import React from "react";
import { NavLink } from "react-router-dom";
const SignedOut = () => {
  return (
    <ul className="left">
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/signin">LogIn</NavLink>
      </li>
    </ul>
  );
};

export default SignedOut;
