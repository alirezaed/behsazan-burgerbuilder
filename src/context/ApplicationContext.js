import React from 'react';

export const ApplicationContext = React.createContext({
    theme:'light',
    lang:'en'
});

export const AppProvider = ApplicationContext.Provider;
