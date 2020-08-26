import React from "react"
import { useSelector } from "react-redux";
import { selectAllTransactions } from "../redux/transactionsSlice";

export const Balance = () => {
    const allTransactions = useSelector(selectAllTransactions);

    const transactionAmount = allTransactions.map(expenses => expenses.amount);

    const expenses = transactionAmount.filter(expenses => expenses < 0)
        .reduce((acc, amount) => acc + amount, 0);

    const income = transactionAmount.filter(expenses => expenses > 0)
        .reduce((acc, amount) => acc + amount, 0);

    const balance = expenses + income;

    return (
        <section className="stack split">
            <h2>Balance</h2>
            <hr />
            <h3>Your Balance: {`#${balance.toFixed(2)}`}</h3>
            <section className="balance box">
                <section className="box">
                    <h4>Income</h4>
                    <p>{`#${income.toFixed(2)}`}</p>
                </section>
                <section className="box">
                    <h4>Expenses</h4>
                    <p>{`#${expenses.toFixed(2)}`}</p>
                </section>
            </section>
        </section>
    );
};