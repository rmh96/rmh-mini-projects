import React, { useEffect, useState } from "react";
import BackToHome from "./BackToHome";

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched after 2 seconds");
    }, 2000);
  });
};

const TestingSuspense = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
    });
  }, []);

  return (
    <>
      <BackToHome />
      <p className="flex justify-center">{data}</p>
    </>
  );
};

export default TestingSuspense;
