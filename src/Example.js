import React, { useState } from "react";

import { human } from "./persons";
import "./example.css";
const Example = () => {
  const someNumber = 0;
  const [count, setCount] = useState(0);

  const incrementLater = () => {
    console.log("IM HERE");
    setTimeout(() => {
      setCount((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <div className="cont">
        <button type="button" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <h1 className="title">{count}</h1>
        <button type="button" onClick={() => setCount(count - 1)}>
          Decrease
        </button>
      </div>
      <div className="cont-two">
        <h1 className="title">{count}</h1>
        <button type="button" onClick={incrementLater}>
          INCREASE
        </button>
      </div>
    </>
  );
};

export default Example;
