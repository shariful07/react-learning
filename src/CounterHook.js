import React, { useState } from "react";

export default function CounterHook( props ){
    const [state, setState] = useState(props);
    
    return (
        <div>
            <button>-</button>
            <span>{props.initialCount}</span>
            <button>+</button>
        </div>
    );
}