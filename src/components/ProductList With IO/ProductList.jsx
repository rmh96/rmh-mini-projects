import React, { useCallback, useEffect, useRef, useState } from "react";
import { myAxios } from "../../utils/AxiosInterceptor";
import BackToHome from "../BackToHome";
import InfiniteScroll from "./InfiniteScroll";
import { useDebounceQuery } from "./useDebounceQuery";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const [apiData, setData] = useState([]);
  const [debounceQuery] = useDebounceQuery(query, 300);

  const handleQueryChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const getData = useCallback((query, skipNumber) => {
    console.debug("Skil Number - ", skipNumber);
    return new Promise(async (resolve, reject) => {
      try {
        if (query === "") return;
        const promise = await fetch(
          "https://dummyjson.com/products/search?" +
            new URLSearchParams({
              q: query,
              limit: 10,
              skip: skipNumber,
            })
        );
        const data = await promise.json();
        console.log(promise);
        data?.products && setData((prev) => [...prev, ...data?.products]);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  const renderItemList = useCallback((item, key, ref) => {
    return (
      <div ref={ref} key={key} className="con">
        <img
          src={item?.images[0]}
          alt="productImg"
          style={{ height: "100%", width: "100%" }}
        />
        <span>{item?.title}</span>
        <p>{item?.description}</p>
      </div>
    );
  }, []);

  return (
    <div className="product-con">
      <BackToHome />
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          className=" border border-black absolute top-9 left-1/2 -translate-x-[50%] outline-none"
          placeholder="search product"
        />
      </div>
      <InfiniteScroll
        renderListItem={renderItemList}
        getData={getData}
        query={debounceQuery}
        listData={apiData}
      />
    </div>
  );
};

export default ProductList;

// ) : (
//   <>Loading Data</>
// )}
