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

export const signUp = (data) =>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            data.email,
            data.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName:data.firstName,
                lastName:data.lastName,
                initials: data.firstName[0] + data.lastName[0]
            }).then(()=>{
                dispatch({type:'SIGNUP_SUCCESS'})
            })
        }).catch((err)=>{
            dispatch({type:'SIGNUP_ERROR'})
        })
    }
}
