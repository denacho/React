import React, { useState } from "react";

const Ex1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1> {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
};

const Ex2 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

const Ex3 = () => {
  const [count, setCount] = useState(0);

  let returnDisplayTag = count => {
    let tag = "";
    if (count % 3 === 0 && count !== 0) tag += "Fizz";
    if (count % 5 === 0 && count !== 0) tag += "Buzz";
    if (tag == "") tag = count;

    return tag;
  };

  return (
    <div>
      <p>{returnDisplayTag(count)}</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
};

const Ex4 = () => {
  let initialTime = new Date();
  let currentTime =
    initialTime.getHours() +
    ":" +
    initialTime.getMinutes() +
    ":" +
    initialTime.getSeconds();
  const [time, setTime] = useState(0);
  const handleRefresh = () => {
    setTime(currentTime);
  };

  return (
    <div>
      <h1>The current time is: {time}</h1>
      <button onClick={handleRefresh}>Refresh Me!</button>
    </div>
  );
};

const Ex5 = () => {
  const [out, setOut] = useState("Out");
  const handleMouse = () => {
    if (out === "Out") {
      setOut("In");
    } else if (out === "In") {
      setOut("Out");
    }
  };
  return (
    <div>
      <h1>{out}</h1>
      <button onMouseOver={handleMouse}>Hover Over Me</button>
    </div>
  );
};

const Ex6 = () => {
  const [hover, setHover] = useState(0);

  return (
    <div>
      <h1>{hover} times hovered!</h1>
      <button
        onMouseOver={() => {
          setHover(hover + 1);
        }}
      >
        Hover Over Me
      </button>
    </div>
  );
};

const Ex7 = () => {
  const [color, setColor] = useState("");
  const handleYellowClick = () => {
    if (color !== "yellow") {
      setColor("YELLOW");
    }
  };
  const handleGreeClick = () => {
    if (color !== "green") {
      setColor("GREEN");
    }
  };
  const handleBlueClick = () => {
    if (color !== "blue") {
      setColor("BLUE");
    }
  };
  return (
    <div>
      <p>'{color}'</p>
      <button onClick={handleYellowClick}>yellow</button>
      <button onClick={handleGreeClick}>green</button>
      <button onClick={handleBlueClick}>blue</button>
    </div>
  );
};

export { Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7 };
