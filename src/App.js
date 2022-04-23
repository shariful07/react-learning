import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Counter from "./components/Counter";
// import CounterHook from "./components/CounterHook";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackData from "./components/data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/shared/AboutIconLink";

function App() {
    const [feedback, setFeadback] = useState(feedbackData);

    const addFeedback = (newFeedback) => {
        console.log(newFeedback);
    };

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeadback(feedback.filter((item) => item.id !== id));
        }
    };
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <div className="container">
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList
                                feedback={feedback}
                                handleDelete={deleteFeedback}
                            />
                        </div>
                    }
                ></Route>
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <AboutIconLink />
            {/* <Counter initialCount={1}></Counter>
            <CounterHook initialCount={10}></CounterHook> */}
        </Router>
    );
}

export default App;
