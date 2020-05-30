import { createContext } from 'react';

export const UserContext = createContext({
  isLoaded: false,
  user: null,
});

