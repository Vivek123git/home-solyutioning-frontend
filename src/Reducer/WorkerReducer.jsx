import produce from "immer";

let auth = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')).auth : {
  isAuthenticated: false,
  error: null,
  worker:null,
}

const initialState = {
  isAuthenticated: auth && auth.isAuthenticated ? auth.isAuthenticated : false,
  error: auth && auth.error ? auth.error : null,
  worker: auth && auth.worker ? auth.worker : null,
};

const WorkerReducer = (state = initialState, action) => {
  switch (action.type) {

    case "LOGIN_SUCCESS_WORKER":
      console.log(action.payload,"payload");
        return produce(state, (draftState) => {
          draftState.isAuthenticated = true;
          draftState.worker = action.payload;
          draftState.error = null;
        });  
    
    case "LOGIN_FAILURE_WORKER":
        return produce(state, (draftState) => {
          draftState.isAuthenticated = false;
          draftState.error = action.error;
        });  
 
    case "LOG_OUT_WORKER":
        return produce(state,(draftState)=>{
          draftState.isAuthenticated = false;
          draftState.worker = false;
        })   
    default:
      return state;
  }
};

export default WorkerReducer;
