import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalProvider"

export const IncomeExpenses = () => {

    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map((trans) => trans.amount)
    const income = amounts.filter((amount) => amount > -1).reduce((arr, value) => arr + value, 0).toFixed(2)
    const expense = amounts.filter((amount) => amount < 0).reduce((arr, value) => arr + value, 0).toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
                </div>
                <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>
        </div>
    )
}