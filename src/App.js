import Counter from "./components/Counter";
import CounterHook from "./components/CounterHook";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackItem />
            </div>
            <Counter initialCount={1}></Counter>
            <CounterHook initialCount={10}></CounterHook>
        </>
    );
}

export default App;
