
export const onSetAlert=(status,message)=>(dispatch)=>{
    let data = {status,message}
    dispatch({type:"ON_SET_ALERT", payload:data})
}