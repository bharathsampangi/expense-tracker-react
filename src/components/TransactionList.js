import React, {useContext} from "react"
import { GlobalContext } from "../context/GlobalProvider"
import { Transaction } from "./Transaction"

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext)

    return (
        <ul id="list" className="list">
            {
                transactions.map((transaction) => {
                    return (
                        <Transaction transaction={transaction} key={transaction.id} />
                    )
                })
            }
            
        </ul>
    )
}