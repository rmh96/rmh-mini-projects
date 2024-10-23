import React, { useState } from "react";
import BackToHome from "./BackToHome";

const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
const INTERVAL_FOR_DEACTIVATE = 400;

const Cube = ({ clicked, filled, isDeactivate }) => {
  return (
    <button
      onClick={clicked}
      className={`h-20 w-[25%] border-2 mx-2 my-4 ${filled && "bg-green-600"}`}
      disabled={isDeactivate}
    ></button>
  );
};

const GridActivateAndDeActivate = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const deactivateCubes = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, INTERVAL_FOR_DEACTIVATE);
  };
  const activateCubes = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCubes();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <BackToHome />
      <div className="mt-10">
        Please select all cells in different order and observe once all are
        clicked{" "}
      </div>
      <div className="flex justify-center mt-24 flex-wrap w-[30%] border">
        {config.flat(1).map((item, index) => {
          return item ? (
            <Cube
              key={index}
              clicked={() => activateCubes(index)}
              filled={order.includes(index)}
              isDeactivate={order.includes(index) || isDeactivating}
            />
          ) : (
            <div className="h-16 w-[25%] mx-2 my-4" />
          );
        })}
      </div>
    </div>
  );
};

export default GridActivateAndDeActivate;
