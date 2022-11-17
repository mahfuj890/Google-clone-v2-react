import { createContext, useContext, useReducer } from "react";

//Prepering Data Layer
export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//Hook which allow us to pull information from data layer
export const useStateValue = () => useContext(StateContext);
