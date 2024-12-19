import "./App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { miniProjectNamesAndLinks as existingPath } from "./utils/appRouter";

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full text-center">
        Please create a new route to test functionality... Happy coding
      </div>
      <div className="font-semibold mt-10 w-full text-xl text-center">
        RMH Mini Projects:
      </div>
      <div className="flex px-5 py-14 flex-wrap">
        {existingPath.map((item) => {
          return (
            <div
              key={item.name}
              className={`text-base cursor-pointer w-[33%] border h-20 flex items-center justify-center drop-shadow-lg px-5 ${
                item.stillWorking && "text-red-500"
              }`}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
