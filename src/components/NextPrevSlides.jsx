import React, { useState } from "react";
import { slides } from "../utils/constants";
import BackToHome from "./BackToHome";

const NextPrevSlides = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const next = () => {
    setSlideIndex((prev) => prev + 1);
  };
  const prev = () => {
    setSlideIndex((prev) => prev - 1);
  };
  const restart = () => {
    setSlideIndex(0);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
      <BackToHome />
      <div className="flex space-x-10">
        <button
          className={`p-4  text-white border border-green-700  text-lg font-semibold ${
            slideIndex === 0 ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={slideIndex === 0}
          onClick={restart}
        >
          Restart
        </button>
        <button
          className={`p-4 text-white border border-green-700 text-lg font-semibold ${
            slideIndex === 0 ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={slideIndex === 0}
          onClick={prev}
        >
          Prev
        </button>
        <button
          className={`p-4  text-white border border-green-700  text-lg font-semibold ${
            slideIndex === slides.length - 1
              ? "bg-gray-400"
              : "hover:bg-green-600 bg-green-500"
          }`}
          disabled={slideIndex === slides.length - 1}
          onClick={next}
        >
          Next
        </button>
      </div>
      <div className="w-1/2 border shadow-xl p-20 mt-20 flex flex-col justify-center items-center space-y-4 ">
        <div className="text-lg">Slide Number - {slides[slideIndex].id}</div>
        <div className="text-3xl font-semibold">{slides[slideIndex].title}</div>
      </div>
    </div>
  );
};

export default NextPrevSlides;
