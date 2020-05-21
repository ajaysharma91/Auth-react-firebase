const signIn = (authValue)=>{
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            authValue.email,
            authValue.password
        ).then(()=>{
            dispatch({type:"LOGIN_SUCCESS"})
        }).catch(err=>{
            dispatch({type:"LOGIN_ERROR", err})
        })
    }
}

export default signIn;


export const signOut = () =>{
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(
            dispatch({type:'SignOut_Success'})
        );
    }
}
