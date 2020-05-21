import React from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import {connect} from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
class Dashboard extends React.Component {
  render() {
    const {project} = this.props;
    return (
      <div className="dasgboard container">
        <div className="row">
          <div className="col s12 m6"><ProjectList projects={project}/></div>
          <div className="col s12 m5 offset-m1"><Notification/></div>
        </div>
      </div>
    );
  }
}

const maptStatetoProps = (state)=>{
  console.log(state);
  return {
  project:state.firestore.ordered.project
  }
}
export default compose(connect(maptStatetoProps),
firestoreConnect([
  {collection:"project"}
]))(Dashboard);
