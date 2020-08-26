import {configureStore} from "@reduxjs/toolkit";
import transactionReducer from "./transactionsSlice";

const reducers = {
    transactions: transactionReducer,
};

export const store = configureStore({
    reducer: reducers,
})