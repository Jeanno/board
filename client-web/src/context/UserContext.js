import { createContext } from 'react';

export const UserContext = createContext({
  userIsLoaded: false,
  user: null,
  token: null,
  register: null
});

