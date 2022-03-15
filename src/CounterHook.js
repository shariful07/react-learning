import React, { useState } from "react";

export default function CounterHook(props) {
    const [state, setState] = useState(props.initialCount);
    function changeCount(amount) {
        setState(() => {
            return state + amount;
        });
    }
    return (
        <div>
            <button onClick={() => changeCount(-1)}>-</button>
            <span>{state}</span>
            <button onClick={() => changeCount(1)}>+</button>
        </div>
    );
}
