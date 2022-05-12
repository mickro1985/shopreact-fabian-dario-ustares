import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ItemCount from "./ItemCount";

const Item = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={item.pictureUrl}
        alt={item.title}
      />
      <CardContent>
        <Typography variant="h5" color="text.primary">
          {item.title}
        </Typography>
        <Typography variant="caption" color="text.secundary">
          {item.description}
        </Typography>
        <Typography variant="h4" color="text.primary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ItemCount stock="10" />
      </CardActions>
    </Card>
  );
};

export default Item;
