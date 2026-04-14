"use client"
import React, { createContext, useState } from 'react';

export const ProviderContext = createContext();

const ContextProviders = ({children}) => {
    const [log, setLogs] = useState([]);

    const handleLogs = (data) => {
        setLogs(prev => [data, ...prev]);
    }

    const data = {
        log,
        setLogs,
        handleLogs
    }

    return (
        <ProviderContext.Provider value={data}>
            {children}
        </ProviderContext.Provider>
    );
};

export default ContextProviders;