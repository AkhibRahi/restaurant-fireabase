import { useContext, useReducer, createContext } from "react";

export const StateContext = createContext()

export const StateProvider = ({ Reducer, InitialState, children }) => {

    return (
        <StateContext.Provider value={useReducer(Reducer, InitialState)}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateValue = () => useContext(StateContext);
