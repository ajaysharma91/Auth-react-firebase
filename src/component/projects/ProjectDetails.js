import React from 'react';
import {compose} from 'redux';
import {firestoreConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';

const ProjectDetails = (props) => {
    const id =props.match.params.id;
    const {project} =props;
    console.log(project);
    if(project){
        return(
            <div className="conatiner section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title} -{id}</span>
                        <p>{project.content}</p>
                        {/* <p className="gery-text text-darken-3">{project.createdAt}</p> */}
                    </div>
                </div>
    
            </div>
        )
    }else{
        return (
        <div className="conatiner section project-details">
                <div className="card z-depth-0">
                    <span>Loding Content!!....</span>
                </div>
    
            </div>
            )
    }
    
}
const mapStateToProps = (state, ownProps)=> {
    console.log(state);
    const id =ownProps.match.params.id;
    const projects = state.firestore.data.project;
    const project = projects ? projects[id] :null;
    return {
    project:project
    }
}
export default 
compose(
    connect(mapStateToProps),
    firestoreConnect([
    {collection:"project"}
   ]))
   (ProjectDetails);