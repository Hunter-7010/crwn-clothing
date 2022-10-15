import { React, createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "../utils/firebase.utils";

// AS THE ACTUAL VALUE YOU WANT TO ACCESS
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //WHEN AUTH STATE CHANGES IT RERUNS THIS CODE
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
//WITH THIS WE WRAP THE ENTIRE APP COMPONENT
