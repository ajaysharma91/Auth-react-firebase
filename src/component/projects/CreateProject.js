import React from 'react';
import createProject from '../../actions/projectAction';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

class Createproject extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            content:''
        }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    formSubmit = (e) =>{
        e.preventDefault();
        this.props.createProject(this.state);
        e.target.reset();
    }
    
    render(){
        const {auth,result}  = this.props;
        if(!auth.uid) return <Redirect to="/signin"></Redirect>;
        if(result) return <Redirect to="/"></Redirect>;
        return(
            <div className="container">
                <form onSubmit={this.formSubmit} className="white">
                    <h4 className="grey-text text-darken-3">Createproject</h4>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea name="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input type="submit" value="Create Project" className="btn pink lighten-1"/>
                    </div>
                </form>

            </div>
        )
    }
}
const mapsStateToProps = (state) =>{
    console.log(state);   
    return{
        auth:state.firebase.auth,
        result:state.project.result
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps");
    return {
        createProject : (project) => dispatch(createProject(project))
    }
}

export default connect(mapsStateToProps,mapDispatchToProps)(Createproject);