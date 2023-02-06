import { createContext, useReducer, useState } from "react";

export const AppContext = createContext();

export default function ContextProvider({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          user: { ...action.payload },
        };

      default:
        return state;
    }
  };

  const [background, setBackground] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    user: {},
  });

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        background,
        setBackground,
        mounted,
        setMounted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
