
export const onSetAlert=(status,message)=>(dispatch)=>{
    let data = {status,message}
    dispatch({type:"ON_SET_ALERT", payload:data})
}

export const onClearAlert=()=>(dispatch)=>{
     let data = false
    dispatch({type:"ON_CLEAR_ALERT",payload:data})
}