import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';
import {signOut} from '../../actions/authAction';
const SignedIn = (props) => {
  const {profile} = props;
  return (
    <ul className="left">
      <li>
        <NavLink to="/createproject">New Project</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Logout</a>
      </li>
      <li>
        <NavLink className="btn btn-floating pink lighten-1" to="/">{profile.initials}</NavLink>
      </li>
    </ul>
  );
};
const mapsStateToProps = (state) =>{
  return {
    profile:state.firebase.profile
  }
}
const mapsDispatchToProps = (dispatch) =>{
  return{
    signOut : () => dispatch(signOut())
  }
}
export default connect(mapsStateToProps,mapsDispatchToProps)(SignedIn);
