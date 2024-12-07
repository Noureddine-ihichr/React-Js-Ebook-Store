// UserContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find(u => u.email === userData.email);
    
    // If user exists, use their stored data (including profile picture)
    const finalUserData = existingUser || {
      ...userData,
      name: userData.name || '',
      profilePicture: userData.profilePicture || null
    };

    setUser(finalUserData);
    localStorage.setItem('userData', JSON.stringify(finalUserData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userData');
  };

  const updateUser = (updatedData) => {
    // Update the current user state
    setUser(updatedData);
    
    // Update in userData (for current session)
    localStorage.setItem('userData', JSON.stringify(updatedData));
    
    // Update in users array (for future logins)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map(u => 
      u.email === updatedData.email ? { ...u, ...updatedData } : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);
        setUser({
          ...userData,
          name: userData.name || '',
          profilePicture: userData.profilePicture || null
        });
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('userData');
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout, updateUser }}>
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

export default UserContext;
