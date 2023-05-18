import React from 'react'
import {GlobalStyle} from "./styles";

const App = () => {
    const message = (name) => {
        return `
        ${name} is an empress in Yanxi Palace.
        `
    }

    return (
        <div className="App">
            <GlobalStyle/>
            <h1>Greetings, Empress 🎎</h1>
            <h2>{message `Hoifa-Nara`}</h2>
        </div>
    )
}

export default App;
