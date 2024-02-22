import "./App.css";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [apiData, setData] = useState([]);

  useEffect(() => {
    const abortCon = new AbortController();
    const signal = abortCon.signal;
    const fetchData = async () => {
      try {
        const data = await fetch("https://dummyjson.com/products", { signal });
        const res = await data.json();
        setData(res.products);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();

    return () => {
      abortCon.abort();
      setData("");
    };
  }, []);
  return (
    <div className="App">
      <ProductList data={apiData} />
    </div>
  );
}

export default App;
