import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

// Create the AuthContext
export const AuthContext = createContext(null);

// Create the AuthProvider component
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Add an authentication listener
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setUser(user);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
