import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CtxInterface {
  currentUser: string | null;
  setCurrentUser: (token: string) => void;
}

const Ctx = React.createContext<CtxInterface | null>(null);

export const CtxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getCurrentUser = async (): Promise<void> => {
    const loggedInUser = await AsyncStorage.getItem('@currentUser');
    modifyCurrentUser(loggedInUser);
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  const [currentUser, modifyCurrentUser] = useState<string | null>('');
  const setCurrentUser = async (token: string): Promise<void> => {
    await AsyncStorage.setItem('@currentUser', token);
    modifyCurrentUser(token);
  };

  return (
    <Ctx.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </Ctx.Provider>
  );
};

export const useCtx = () => {
  return useContext(Ctx);
};
