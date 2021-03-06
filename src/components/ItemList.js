import React, { useState, useEffect } from "react";
import Item from "./Item";
import "./Item.css";
import { listadoProductos } from "./listado";
import {doc, getDoc, getFirestore} from "firebase/firestore"

function ItemList() {

  //kBrWABcO04GteI8v3ydp
  //images

  const db = getFirestore();
  
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(listadoProductos);
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="ListCont">
      {products.map((product) => {
        const { id } = product;
        return <Item data={product} key={id} />;
      })}
    </div>
  );
}

export default ItemList;
