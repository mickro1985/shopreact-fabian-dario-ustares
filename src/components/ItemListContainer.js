import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function ItemListContainer({ greeting }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 800,
          height: 600,
        },
      }}
    >
      <Paper>Hola {greeting} bienvenido a nuestra tienda</Paper>
    </Box>
  );
}

export default ItemListContainer;
