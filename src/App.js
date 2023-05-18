import "./styles.css"

export default function App() {
    const message = (name) => {
        return `
        ${name} is an empress in Yanxi Palace.
        `
    }

    return (
        <div className="App">
            <h1>Greetings, Empress 🎎</h1>
            <h2>{message `Hoifa-Nara`}</h2>
        </div>
    )
}
