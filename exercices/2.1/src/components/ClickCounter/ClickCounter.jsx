/* eslint-disable react/prop-types */
import { useState } from "react";

const ClickCounter = ({title, message}) => {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <h2>{title}</h2>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>{count >= 10 ? message : ""}</p>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
      </div>
      )};

export default ClickCounter;