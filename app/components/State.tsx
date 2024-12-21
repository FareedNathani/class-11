"use client";
import { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1); // Increment the count
    };

    const handleDecrement = () => {
        setCount(count - 1); // Decrement the count
    };

    return (
        <div className="text-center mt-10">
            <h1 className="text-7xl mb-5">{count}</h1>
            <button
                className="py-2 px-10 bg-blue-700 text-white rounded-md"
                onClick={handleIncrement}
            >
                Increment
            </button>
            <button
                className="py-2 px-10 bg-red-700 text-white rounded-md ml-5"
                onClick={handleDecrement}
            >
                Decrement
            </button>
        </div>
    );
};

export default State;
