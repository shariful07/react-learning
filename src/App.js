import Counter from "./Counter";
import CounterHook from "./CounterHook";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>My App</h1>


            Counter using class component
            <Counter initialCount={1}></Counter>

            Counter using function component
            <CounterHook initialCount={10}></CounterHook>
        </div>
    );
}

export default App;
