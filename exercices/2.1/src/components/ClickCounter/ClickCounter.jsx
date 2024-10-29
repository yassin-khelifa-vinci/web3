/* eslint-disable react/prop-types */
import { useState } from "react";

const ClickCounter = ({title, message, mouseHover}) => {
    const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{isHovered ? mouseHover : ""}</p>
            <button onClick={() => setCount((count) => count + 1)} 
            onMouseEnter={() => setIsHovered(!isHovered)} onMouseLeave={() => setIsHovered(!isHovered)}>
                count is {count}
            </button>
            <p>{count >= 10 ? message : ""}</p>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
      </div>
      )};

export default ClickCounter;