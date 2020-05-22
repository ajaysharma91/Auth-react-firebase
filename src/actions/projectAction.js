import firebase from "../config/firebaseConfig";

const createProject = (project) =>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        const profileFN = getState().firebase.profile.firstName;
        const profileLN = getState().firebase.profile.lastName;
        const authId = getState().firebase.auth.uid;
        console.log(profileLN);

        const firestore = getFirestore();
        firestore.collection('project').add({
            ...project,
            authfirstName:profileFN,
            authlastName:profileLN,
            authorId:authId,
            createdAt: new Date()
        }).then(()=>{
            console.log("responce")
            dispatch({type:'CREATED-SUCCESS'});
        }).catch((err)=>{
            console.log("errror")

            dispatch({type:'ERROR-CREATE-PROJECT', err});

        })
    }
}

export default createProject;