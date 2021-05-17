import axios from 'axios';


const instance  = axios.create({
    baseURL:'http://aedalat.ir/'
});

const newInstance = {
    ...instance,
    post:(url,data)=>{
        return instance.post(url,data,{
            headers:{
                Authorization : 'Bearer ' + window.localStorage.getItem('token')
            }
        });
    }
}

export default newInstance;