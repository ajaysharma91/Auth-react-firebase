import React from 'react';
import signIn from '../../actions/authAction';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    formSubmit = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state);
        e.target.reset();
    }
    render(){
        const {authError, auth} = this.props;
        const {authSuccess} = this.props;
        if(auth.uid) return <Redirect to="/"></Redirect>

        
        return(
            <div className="container">
                <form onSubmit={this.formSubmit} className="white">
                    <h4 className="grey-text text-darken-3">SignIn</h4>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input type="submit" value="SignIn" className="btn pink lighten-1"/>
                    </div>
                    <div className="error-field">
                        <span className="red lighten-1">{authError ? <p className=" red-text lighten-1">Login Failed</p> :null }</span>
                    </div>
                </form>

            </div>
        )
    }
}
const mapsStateToProps = (state) => {
    console.log("SIgnIn" +state)
return {
    authError:state.auth.authError,
    authSuccess:state.auth.authDomain,
    auth:state.firebase.auth
}
}
const mapsDispatchToProps = (dispatch) =>{
    console.log('SignIn Dispath');
    return{
        signIn: (authValue) => dispatch(signIn(authValue))
    }
}

export default connect(mapsStateToProps,mapsDispatchToProps)(SignIn);