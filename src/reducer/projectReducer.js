
const initialState = {
    projects:[
        {id:1,title:'This is Education Project'},
        {id:1,title:'This is Medical Project'},
        {id:1,title:'This is Market Project'},
    ]
}
const projectReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'CREATE-PROJECT':
            console.log("Project Created Successfully "+ action.project);
            return state;
        case 'ERROR-CREATE-PROJECT' :
            console.log("Something Error Occurs: "+action.err)  
            return state;
        default:
            return state;
    }
    
}

export default projectReducer;