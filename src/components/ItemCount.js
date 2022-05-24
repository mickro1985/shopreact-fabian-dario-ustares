import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ItemCount({ stock, inicial, onAdd }) {
  const [count, setCount] = useState(inicial);

  function add() {
    count < stock
      ? setCount(count + 1)
      : alert("Llegaste al maximo de unidades que puedes comprar");
  }

  function sub() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  // function onAdd() {
  //   alert("Se agregaron " + count + " articulos a tu carrito");
  // }

  return (
    <div>
      <div>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={sub}>
            -
          </Button>
          <p>{count}</p>
          <Button variant="outlined" onClick={add}>
            +
          </Button>
        </Stack>
      </div>
      <Button variant="contained" onClick={() => onAdd(count)}>
        Agregar al Carrito
      </Button>
    </div>
  );
}
