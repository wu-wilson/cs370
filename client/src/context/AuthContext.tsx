import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  UserCredential,
  User,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

type AuthContext = {
  user?: User | null;
  logout?: () => Promise<void>;
  createUser?: (email: string, password: string) => Promise<UserCredential>;
  login?: (email: string, password: string) => Promise<UserCredential>;
  resetPassword?: (email: string) => Promise<void>;
};

const UserContext = createContext<AuthContext>({});

export const AuthContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>();
  const [authing, setAuthing] = useState<boolean>(true);

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
      setUser(currentUser);
      setAuthing(false);
    });
    return () => unsubscribe();
  }, []);

  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  return authing ? (
    <div>Loading</div>
  ) : (
    <UserContext.Provider
      value={{ user, logout, createUser, login, resetPassword }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
