 import produce from "immer";

const initialState={
    
}

export const AlertReducer = (state = initialState, action) => {
    const{type,payload} = action
    switch (type) {
        case "ON_SET_ALERT": 
            return produce (state,(draft)=>{
                draft.status = payload.status
                draft.msg = payload.message
            })
        
        default: 
            return state ; 
    }       
} 