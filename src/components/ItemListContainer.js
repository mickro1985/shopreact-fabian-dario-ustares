import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import dataItems from "../data/data.json";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataItems);
    }, 2000);
  });

  useEffect(() => {
    getItems
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        Hola {greeting} bienvenido a nuestra tienda
        <ItemList arrayDeItems={items} />
      </Paper>
    </Box>
  );
}

export default ItemListContainer;
