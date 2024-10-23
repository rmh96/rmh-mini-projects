import React, { useState, useEffect } from "react";
import BackToHome from "./BackToHome";

const Testing = () => {
  const [value, setValue] = useState(0);
  const [dValue, setDValue] = useState(0);
  const [tValue, setTValue] = useState(0);

  const incrementValue = (setOption) => {
    setOption((pr) => pr + 1);
  };

  const debounceFunc = (cb, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const throllingFunc = (cb, delay) => {
    let doneFirst = true;
    let waitingArgs;
    return (...args) => {
      if (doneFirst) {
        cb(...args);
        doneFirst = false;
      } else {
        waitingArgs = args;
        return;
      }

      setTimeout(() => {
        doneFirst = true;
      }, delay);
    };
  };

  useEffect(() => {
    const debounceWay = debounceFunc(incrementValue, 1000);
    const throttleWay = throllingFunc(incrementValue, 1000);
    window.addEventListener("mousemove", (e) => {
      incrementValue(setValue);
      debounceWay(setDValue);
      throttleWay(setTValue);
    });
  }, []);

  return (
    <>
      <BackToHome />
      <div className="pt-32">
        <div>Testing Debounce / Throtting by mouse move</div>
        {/* <input
        className="border"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      /> */}
        <div>Default: {value}</div>
        <div>Debounce: {dValue}</div>
        <div>Throtting: {tValue}</div>
      </div>
    </>
  );
};

export default Testing;
