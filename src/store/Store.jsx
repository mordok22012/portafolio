import React, { createContext, useReducer, useContext } from "react";
//create context
const StoreContext = createContext();


//create reducer
function reducer(state, action) {
    switch (action.type) {
        case 'navOnOf':
            
            return {
                ...state,
                isOpen: action.payload,
            }
        
        default:
            return state;
    }
  }

// Initial state
const initialState = {
    activeSection: '',
    isOpen: false,
  };

//Custom hook to use context
export const useStore = () => useContext(StoreContext);

//Context Provider with useReducer
export const Store = ({children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    

    return (    
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    );
}

