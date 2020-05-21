import React from 'react';


class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            firstName:'',
            lastName:''
        }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    formSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        e.target.reset();
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.formSubmit} className="white">
                    <h4 className="grey-text text-darken-3">SignUp</h4>
                    <div className="input-field">
                        <label htmlFor="first-name">FirstName</label>
                        <input type="text" name="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="last-name">Password</label>
                        <input type="text" name="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input type="submit" value="SignUp" className="btn pink lighten-1"/>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignUp;