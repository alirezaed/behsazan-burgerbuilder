import React, { useState } from 'react';
import jwt_decode from "jwt-decode";

export const AuthenticationContext = React.createContext({
    isLogin:false,
    username:'',
    login:()=>{},
    logout:()=>{}
});


export function AuthenticationProvider(props){

    const [isLogin,setIsLogin] = useState(false);
    const [username,setUsername] = useState('');

    const login=(token)=>{
        window.localStorage.setItem('token',token);
        const payload = jwt_decode(token);
        setUsername(payload && payload.username)
        setIsLogin(true);
    }

    const logout=()=>{
        window.localStorage.removeItem('token');
        setIsLogin(false);
    }


    return <AuthenticationContext.Provider value={{isLogin,username,login,logout}}>
        {props.children}
    </AuthenticationContext.Provider>
}



