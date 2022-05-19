import Item from "./Item";
import Grid from "@mui/material/Grid";

const ItemList = ({ arrayDeItems }) => {
  return (
    <Grid container spacing={2}>
      {arrayDeItems.map((item) => (
        <Grid item xs={4} key={item.id}>
          <Item item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
