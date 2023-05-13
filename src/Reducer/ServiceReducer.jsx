import produce from "immer";

const initialState={
   worker:""
}

export const ServiceReducer = (state=initialState,action)=>{
    switch(action.type) {
        case "FETCH_WORKER_LIST" :
            return produce(state,(draftState)=>{
                draftState.worker = action.payload
            })

        default: 
            return state ;    
    }
}