import React, {createContext, useContext, useReducer} from 'react';

// @ts-ignore
export const StateContext = createContext();

// @ts-ignore
export const StateProvider = ({reducer, initialState, children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

export const getState = () => useContext(StateContext);
