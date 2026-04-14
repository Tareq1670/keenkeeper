"use client"
import { ProviderContext } from '@/Context/context.provider';
import React, { useContext } from 'react';

const TimeLinePage = () => {
    const {log} = useContext(ProviderContext);
    return (
        <div>
            <p>Logs : {log.length}</p>
            <h2>Time line page</h2>
        </div>
    );
};

export default TimeLinePage;