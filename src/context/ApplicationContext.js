import React, { useState } from 'react';

export const ApplicationContext = React.createContext({
    theme:'light',
    lang:'en'
});

export function AppProvider(props){

    const [theme,setTheme] = useState('light');

    const toggleTheme=()=>{
        setTheme(theme == 'light' ? 'dark' : 'light');
    }

    return <ApplicationContext.Provider value={{theme,toggleTheme}}>
        {props.children}
    </ApplicationContext.Provider>
}
