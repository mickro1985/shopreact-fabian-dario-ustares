import Item from "./Item";
import Grid from "@mui/material/Grid";

const ItemList = ({ arrayDeItems }) => {
  return (
    <Grid container spacing={2}>
      {arrayDeItems.map((value) => (
        <Grid item xs={4}>
          <Item key={value.id} item={value} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
