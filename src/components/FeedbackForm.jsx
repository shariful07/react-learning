import { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./shared/RatingSelect";

function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [message, setmessage] = useState("");

    const handleTextChange = (e) => {
        if (text === "") {
            setbtnDisabled(true);
            setmessage(null);
        } else if (text !== "" && text.trim().length <= 10) {
            setmessage("Text should be at least 10 characters");
            setbtnDisabled(true);
        } else {
            setmessage(null);
            setbtnDisabled(false);
        }
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            };
            handleAdd(newFeedback);
            setText('');
        }
    };
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Sent
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;
