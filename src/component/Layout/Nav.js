import React from "react";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import {connect} from 'react-redux';
const Nav = (props) => {
  const {logedOut} = props;
  const links = logedOut.uid ? <SignedIn /> :<SignedOut />
  return (
    <div className="navbar-fixed">
      <nav className="">
        <div className="nav-wrapper grey darken-3">
          <Link to="/" className="brand-logo right">
            Project Creater
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
};


const mapsStateToProps = (state) =>{
  console.log(state);
  return {
    logedOut:state.firebase.auth
  }
}
export default connect(mapsStateToProps)(Nav);
