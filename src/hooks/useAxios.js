import axios from '../tools/fetch';
import {useHistory} from 'react-router-dom';
import { useReduxDispatch} from './useReduxDispatch';

export function useAxios(){

    const history = useHistory();
    const {hideLoading } = useReduxDispatch();
    
    const post = (url,data)=>{
        const result = new Promise((resolve,reject)=>{
            axios.post(url,data)
            .then(response=>{
                resolve(response.data);
            }).catch(err=>{
                if (err.response.status === 403){
                    history.push('/AccessDenied');
                    hideLoading();
                }else{
                    reject(err);
                }
            });
        });
        return result;
    }
    
    return {
        post
    }
}