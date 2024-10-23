import React, { useEffect, useRef, useState } from "react";
import BackToHome from "./BackToHome";

const AutoCounterStopButton = () => {
  const [count, setCount] = useState(0);
  const isRunningRef = useRef(true); // useRef for tracking running state
  let intervalId;

  useEffect(() => {
    if (isRunningRef.current) {
      console.log("Yes");
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    console.log("timer id - ", intervalId);
    return () => {
      console.log(isRunningRef.current, intervalId);
      clearInterval(intervalId);
    };
  }, [isRunningRef.current]);

  const handleStartStop = () => {
    isRunningRef.current = false;
  };

  return (
    <>
      <BackToHome />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold">Counter: {count}</h1>
        <button onClick={handleStartStop} className="bg-gray-200 p-4 border">
          Stop
        </button>
      </div>
    </>
  );
};

export default AutoCounterStopButton;
