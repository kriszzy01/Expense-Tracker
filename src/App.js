import React from "react";
import "./styles/layout.css";
import "./styles/components.css";
import { NewTransaction } from "./components/NewTransaction";
import { History } from "./components/History";
import { Balance } from "./components/Balance";

export const App = () => {
    return (
        <>
            <header className="center">
                <h1>Expense Tracker</h1>
            </header>

            <main className="switcher">
                <section>
                    <NewTransaction />
                    <Balance />
                    <History />
                </section>
            </main>
        </>
    )
};