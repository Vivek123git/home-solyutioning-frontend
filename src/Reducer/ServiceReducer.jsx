import produce from "immer";

const initialState={
   worker:"",
   workerStatus:"",
   servicedesc:[]
}

export const ServiceReducer = (state=initialState,action)=>{
    switch(action.type) {
        case "FETCH_WORKER_LIST" :
            return produce(state,(draftState)=>{
                draftState.worker = action.payload
            })

        case "WORKER_STATUS" :
            return produce(state,(draftState)=>{
                draftState.workerStatus = action.payload.temp
            }) 
            
        case "SERVICE_DISC" :
                return produce(state,(draftState)=>{
                    draftState.servicedesc = action.payload
                })     

        default: 
            return state ;    
    }
}

