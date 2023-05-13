import axios from 'axios';

const url = "https://onehomesolution.000webhostapp.com/"

export async function commonAxios (endPoint ,data, dispatch,token,option) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization' :token
          },
    };
    if (option){
        config = option
    }
    try {
        const res = await axios.post(`${url}${endPoint}`,data ,{config});
        if(res.data.status === true ){
            return{
                status:true,
                data:res.data.data,
                msg:res.data.message
            }
        }else{
            if(res.data.message.includes("Unauthorized Token")){
                dispatch({type:"LOGIN_FAILURE"})
            }else{
                return{
                    status:false,
                    data:res.data.data,
                    msg:res.data.message
                }
            }
        }
    }catch (err) {
        console.log(err)
        return {
            msg:err.message
        }
    }
}