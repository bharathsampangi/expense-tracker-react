import { createContext, useReducer } from "react";
import AppReducer from "../reducers/AppReducer";

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState)

export const GlobaProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const deleteTransaction = (id) => {
        dispatch({ type: "DELETE_TRANSACTION", payload:id })
    }

    const addTransaction = (transaction) => {
        console.log("add", transaction)
        dispatch({type: "ADD_TRANSACTION", payload: transaction})
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )

}