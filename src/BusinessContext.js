import React, { createContext, useContext, useState } from "react";

const BusinessContext = createContext(null);

export const BusinessProvider = ({ children }) => {
  const [business, setBusiness] = useState({
    data: null,
    isAuthenticated: false,
  });
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:8000/businessLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const userData = await response.json();
        setBusiness({ data: userData, isAuthenticated: true });
        return { success: true, data: userData };
      } else {
        return { success: false, error: response.statusText };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setBusiness({ ...business, isAuthenticated: false });
  };

  return (
    <BusinessContext.Provider value={{ business, setBusiness, login, logout }}>
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = () => useContext(BusinessContext);
