import { useState } from "react";

// import Counter from "./components/Counter";
// import CounterHook from "./components/CounterHook";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackData from "./components/data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {
    const [feedback, setFeadback] = useState(feedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeadback(feedback.filter((item) => item.id !== id));
        }
    };
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                />
            </div>

            {/* <Counter initialCount={1}></Counter>
            <CounterHook initialCount={10}></CounterHook> */}
        </>
    );
}

export default App;
