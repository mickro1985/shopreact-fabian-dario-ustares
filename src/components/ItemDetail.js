import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import ItemCount from "./ItemCount";
import { Link as RouterLink } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [Cart, setCart] = useState(0);
  function carrito(itemsCart) {
    setCart(itemsCart);
  }

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 800,
      }}
    >
      <Grid container spacing={12}>
        <Grid item>
          <ButtonBase sx={{ width: 350, height: 350 }}>
            <Img alt={item.title} src={item.pictureUrl} />
          </ButtonBase>
        </Grid>
        <Grid item>
          <Grid item>
            <Grid item>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {item.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {item.id}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" component="div">
                {item.price}
              </Typography>
            </Grid>
            <Grid>
              {Cart ? (
                <Button>
                  <RouterLink to="/Cart" style={{ color: "#00264D" }}>
                    Finalizar la compra de ({Cart} productos)
                  </RouterLink>
                </Button>
              ) : (
                <ItemCount inicial={1} stock={10} onAdd={carrito}></ItemCount>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ItemDetail;
