import firebase from "../config/firebaseConfig";

const createProject = (project) =>{
    console.log(project);
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        console.log([{...project,authfirstName:'rahul',
        authlastName:'sharma'}]);
        const firestore = getFirestore();
        firestore.collection('project').add({
            ...project,
            authfirstName:'rahul',
            authlastName:'sharma',
            authorId:1234,
            createdAt: new Date()
        }).then((project)=>{
            console.log("responce")
            dispatch({type:'CREATE-PROJECT', project});
        }).catch((err)=>{
            console.log("errror")

            dispatch({type:'ERROR-CREATE-PROJECT', err});

        })
    }
}

export default createProject;