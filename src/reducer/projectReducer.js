
const initialState = {
    result:false
}
const projectReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'CREATED-SUCCESS':
            console.log("Project Created Successfully ");
            return {...state, result:true};
        case 'ERROR-CREATE-PROJECT' :
            console.log("Something Error Occurs: "+action.err)  
            return state;
        default:
            return state;
    }
    
}

export default projectReducer;