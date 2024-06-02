import React, { createContext, useContext, useState } from 'react';

const BusinessContext = createContext(null);

export const BusinessProvider = ({ children }) => {
    const [business, setBusiness] = useState(null);

    return (
        <BusinessContext.Provider value={{ business, setBusiness }}>
            {children}
        </BusinessContext.Provider>
    );
};

export const useBusiness = () => useContext(BusinessContext);
