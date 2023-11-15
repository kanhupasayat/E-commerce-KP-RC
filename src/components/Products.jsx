import React, { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  let [productss, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    let data = await fetch("https://fakestoreapi.com/products");
    let getdata = await data.json(); 
    // var x=10
    // setProducts(x);
    setProducts(getdata);
  }

  return (
    <div className="big">
      {productss.map((list) => {
        return (
          <>
            <div className="big1">
              <img src={list.image} alt="" />
              <div>
              <p>ID:{list.id}</p>
              <p>price:{list.price}</p>
              <p>title:{list.title}</p>
              </div>
              
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Products;
