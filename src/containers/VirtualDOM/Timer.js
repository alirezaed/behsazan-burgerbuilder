import React, { useEffect, useState } from 'react';

function Timer(){

    const [date,setDate] = useState();


    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        },1000);
        
    },[])
    return <>{date}</>;
}

export default Timer;