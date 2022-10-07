import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  UserCredential,
  User,
} from "firebase/auth";
import { auth } from "../firebase";

type AuthContext = {
  user?: User | null;
  logout?: () => Promise<void>;
  createUser?: (email: string, password: string) => Promise<UserCredential>;
  login?: (email: string, password: string) => Promise<UserCredential>;
};

const UserContext = createContext<AuthContext>({});

export const AuthContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>();

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, logout, createUser, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
