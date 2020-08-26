import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllTransactions, removeTransaction } from "../redux/transactionsSlice";

export const History = () => {
    const allTransactions = useSelector(selectAllTransactions);

    const dispatch = useDispatch();
    const handleRemoveTransaction = id => dispatch(removeTransaction(id));

    const transactions = allTransactions.map(transaction => {
        const { title, amount, id } = transaction;

        return (
            <li
                key={amount + title}
                className={amount.toString().includes("-") ? "box negative" : "box positive"}
                onClick={() => handleRemoveTransaction(id)}>
                <p>{title}</p>
                <span>{`#${amount}`}</span>
            </li>
        )
    })

    return (
        <>
            {transactions.length !== 0 &&
                <section className="history stack">
                    <h2>History</h2>
                    <hr />
                    <p className="instructions">Click on Transaction to Delete</p>
                    <ul className="stack split">{transactions}</ul>
                </section>
            }
            {transactions.length === 0 &&
                <section className="history stack">
                    <h2>History</h2>
                    <hr />
                    <p className="instructions">No Transaction to Display</p>
                </section>
            }
        </>
    );
};