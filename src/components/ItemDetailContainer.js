import { useState, useEffect } from "react";
import dataItems from "../data/data.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const { itemId } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        const filterItem = dataItems.filter((i) => i.id === Number(itemId));
        resolve(filterItem[0]);
      }, 2000);
    });

    getItem.then((res) => setItem(res)).catch((e) => console.log(e));
  }, [itemId]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
