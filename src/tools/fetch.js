import axios from 'axios';


const instance  = axios.create({
    baseURL:'http://aedalat.ir/',
    

});

export default instance;