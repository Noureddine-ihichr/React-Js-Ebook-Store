// UserContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser({
      ...userData,
      // Ensure 'name' property is set correctly
      name: userData.name || '',
    });
    localStorage.setItem('userData', JSON.stringify({
      ...userData,
      // Ensure 'name' property is set correctly in local storage
      name: userData.name || '',
    }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userData');
  };

  useEffect(() => {
    // Check for user data in local storage when the component mounts
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUser({
        ...userData,
        // Ensure 'name' property is set correctly
        name: userData.name || '',
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
