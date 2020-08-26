import {createSlice, createEntityAdapter, nanoid} from "@reduxjs/toolkit";

const transactionsAdapter = createEntityAdapter();
const initialState = transactionsAdapter.getInitialState();

const transactionsSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        addNewTransaction: {
            reducer (state, payload) {
                transactionsAdapter.addOne(state, payload)
            },
            prepare (title, amount) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        amount
                    }
                }
            }
        },
        removeTransaction: {
            reducer (state, {payload}) {
                
                transactionsAdapter.removeOne(state, payload.id);
            },
            prepare (id) {
                return {
                    payload: {
                        id
                    }
                }
            }
        }
    }
});

export default transactionsSlice.reducer;
export const {addNewTransaction, removeTransaction} = transactionsSlice.actions;

export const {
    selectAll: selectAllTransactions,
} = transactionsAdapter.getSelectors(state => state.transactions);