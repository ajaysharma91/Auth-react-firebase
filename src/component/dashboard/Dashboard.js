import React from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import {connect} from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
class Dashboard extends React.Component {
  render() {
    const {project, auth, notification} = this.props;
    console.log(notification +"not");
    return (
      <div className="dasgboard container">
        <div className="row">
          <div className="col s12 m6"><ProjectList projects={project}/></div>
          <div className="col s12 m5 offset-m1"><Notification notification={notification}/></div>
        </div>
      </div>
    );
  }
}

const maptStatetoProps = (state)=>{
  console.log(state);
  return {
  project:state.firestore.ordered.project,
  auth:state.firebase.auth,
  profile:state.firebase.profile,
  notification:state.firestore.ordered.notification
  }
}
export default compose(connect(maptStatetoProps),
firestoreConnect([
  {collection:"project"},
  {collection:"notification", limit:3, orderBy:['time','desc']}
]))(Dashboard);
