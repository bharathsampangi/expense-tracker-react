import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalProvider"

export const Balance = () => {

    const {transactions} = useContext(GlobalContext)
    
    const array = transactions.map((transaction) => transaction.amount )
    const total = array.reduce((sum, current) => sum + current, 0).toFixed(2)

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}