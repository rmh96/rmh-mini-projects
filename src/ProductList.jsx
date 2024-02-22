import React from "react";

const ProductList = ({ data }) => {
  console.log(data);
  return (
    <div class="product-con">
      {data.length &&
        data.map((item) => {
          return (
            <div key={item.id} class="con">
              <img
                src={item.images[0]}
                alt="productImg"
                style={{ height: "100%", width: "100%" }}
              />
              <span>{item.title}</span>
              <p>{item.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
