import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import dataItems from "../data/data.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (categoryId === undefined) {
          resolve(dataItems);
        } else {
          const filterItems = dataItems.filter(
            (i) => i.categoryId === categoryId
          );
          resolve(filterItems);
        }
      }, 2000);
    });

    getItems
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 1,
          width: 800,
        },
      }}
    >
      <Paper>
        {/* <h1>Hola {greeting} bienvenido a nuestra tienda</h1> */}
        <ItemList arrayDeItems={items} />
      </Paper>
    </Box>
  );
}

export default ItemListContainer;
