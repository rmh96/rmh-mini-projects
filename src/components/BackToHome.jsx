import React from "react";
import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <Link to="/">
      <button className=" bg-blue-600 text-white p-3 absolute top-5 left-8 rounded-lg hover:bg-blue-700 font-semibold">
        Home
      </button>
    </Link>
  );
};

export default BackToHome;
