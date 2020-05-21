import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';
import {signOut} from '../../actions/authAction';
const SignedIn = (props) => {
  return (
    <ul className="left">
      <li>
        <NavLink to="/createproject">New Project</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Logout</a>
      </li>
      <li>
        <NavLink className="btn btn-floating pink lighten-1" to="/">AJ</NavLink>
      </li>
    </ul>
  );
};
const mapsDispatchToProps = (dispatch) =>{
  return{
    signOut : () => dispatch(signOut())
  }
}
export default connect(null,mapsDispatchToProps)(SignedIn);
