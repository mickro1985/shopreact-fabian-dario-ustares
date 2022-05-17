import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Paper from "@mui/material/Paper";

const ItemDetail = ({ item }) => {
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
        maxWidth: 600,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 256, height: 256 }}>
            <Img alt="complex" src={item.pictureUrl} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
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
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ItemDetail;
