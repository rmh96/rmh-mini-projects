import React, { useEffect, useState } from "react";
import { myAxios } from "../utils/AxiosInterceptor";
import BackToHome from "./BackToHome";

const ProductList = () => {
  const [apiData, setData] = useState([]);
  useEffect(() => {
    const abortCon = new AbortController();
    const signal = abortCon.signal;
    const fetchData = async () => {
      try {
        const getCall = await myAxios.get("https://dummyjson.com/products", {
          signal: signal,
        });
        const res = await getCall.data;
        setData(res.products);
      } catch (e) {
        //console.log(e);
      }
    };
    fetchData();

    return () => {
      abortCon.abort();
      setData("");
    };
  }, []);
  return (
    <div className="product-con">
      <BackToHome />
      {apiData.length
        ? apiData.map((item) => {
            return (
              <div key={item.id} className="con">
                <img
                  src={item.images[0]}
                  alt="productImg"
                  style={{ height: "100%", width: "100%" }}
                />
                <span>{item.title}</span>
                <p>{item.description}</p>
              </div>
            );
          })
        : null}
      Data
    </div>
  );
};

export default ProductList;
