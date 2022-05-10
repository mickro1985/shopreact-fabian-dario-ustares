import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ItemCount from "./ItemCount";

function ItemListContainer({ greeting }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 1,
          width: 800,
          height: 600,
        },
      }}
    >
      <Paper>
        Hola {greeting} bienvenido a nuestra tienda
        <ItemCount stock="10" />
      </Paper>
    </Box>
  );
}

export default ItemListContainer;
