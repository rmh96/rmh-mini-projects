import React, { useState } from "react";
import { taskList } from "../utils/constants";
import BackToHome from "./BackToHome";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(taskList);
  const taskStages = ["Started", "Discussion", "Development", "Testing"];

  const next = (id) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        item.stage++;
      }
      return item;
    });
    setTasks(newTasks);
  };
  const prev = (id) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        item.stage = item.stage - 1;
      }
      return item;
    });
    setTasks(newTasks);
  };

  const groupByTasks = () => {
    const stageTasks = taskStages.reduce((acc, stage, index) => {
      acc[stage] = tasks.filter((item) => item.stage === index + 1);
      return acc;
    }, {});
    return stageTasks;
  };

  const groupTasks = groupByTasks();

  return (
    <div className="flex flex-col justify-center items-center">
      <BackToHome />
      <div className="w-[75%] border-4 flex space-x-6 justify-evenly">
        {Object.entries(groupTasks).map(([stage, stageTasks]) => {
          console.log("H-", stage, stageTasks);
          return (
            <div key={stage}>
              <div className="font-bold text-3xl pb-4">{stage}</div>
              <div className="w-full border-2"></div>
              {stageTasks.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center p-2 border mt-10 "
                  >
                    <span>{item.taskName}</span>
                    <div>{item.stage}</div>
                    <div className="flex w-full justify-evenly space-x-6">
                      <button
                        className={`text-xl ${item.stage === 1 && "hidden"}`}
                        onClick={() => prev(item.id)}
                      >
                        ⬅
                      </button>
                      <button
                        className={`text-xl ${
                          item.stage === taskStages.length && "hidden"
                        }`}
                        onClick={() => next(item.id)}
                      >
                        ➡
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KanbanBoard;
