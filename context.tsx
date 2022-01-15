import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CtxInterface {
  currentUser: string | null;
  setCurrentUser: (token: string) => void;
  me: IMeInterface | undefined | null;
  setMe: (setMePayload: IMeInterface) => void;
}

interface IMeInterface {
  id: number;
  username: string;
  alias?: string;
  avatar?: string;
  created_at: number;
  updated_at: number;
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

  const [me, modifyMe] = useState<IMeInterface | null>();
  const [currentUser, modifyCurrentUser] = useState<string | null>('');

  const setCurrentUser = async (token: string): Promise<void> => {
    await AsyncStorage.setItem('@currentUser', token);
    modifyCurrentUser(token);
  };

  const setMe = async (setMePayload: IMeInterface): Promise<void> => {
    modifyMe(setMePayload);
  };

  return (
    <Ctx.Provider value={{ currentUser, setCurrentUser, me, setMe }}>
      {children}
    </Ctx.Provider>
  );
};

export const useCtx = () => {
  return useContext(Ctx);
};
