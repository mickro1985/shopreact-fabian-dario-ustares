import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
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
      </Card>
    </Link>
  );
};

export default Item;
