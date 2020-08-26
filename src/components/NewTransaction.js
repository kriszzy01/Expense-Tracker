import React, { useState, useRef } from "react";
import {useDispatch} from "react-redux";
import { addNewTransaction } from "../redux/transactionsSlice";

export const NewTransaction = () => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

    const titleInput = useRef(null);

    const handleTitleChange = event => setTitle(event.target.value);
    const handleAmountChange = event => setAmount(event.target.value);

    const dispatch = useDispatch();

    const handleAddNewTransaction = event => {
        event.preventDefault();

        if (title === "" || amount === "") {return}
        dispatch(addNewTransaction(title, +amount));

        setTitle("");
        setAmount("");

        titleInput.current.focus();
    };

    return (
        <section className="stack">
            <h2>Add New Transaction</h2>
            <hr/>
            <form className="transaction stack">
                <label htmlFor="title">Transaction Name: </label>
                <input
                    id="title"
                    className="box"
                    type="text"
                    placeholder="Enter Transaction Name..."
                    value={title}
                    onChange={handleTitleChange}
                    ref={titleInput}
                />

                <label htmlFor="amount">Amount:<br/><p className="instructions">Negative value: Expense || Positive Value: Income</p></label>
                <input
                    id="amount"
                    className="box"
                    type="number"
                    placeholder="Enter Amount..."
                    value={amount}
                    onChange={handleAmountChange}
                />
                <button onClick={handleAddNewTransaction} className="box">Add Transaction</button>
            </form>
        </section>
    );
};