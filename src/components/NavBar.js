import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5" sx={{ mr: 2 }}>
            REACT-SHOP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Bebidas
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Lacteos
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Limpieza
            </Button>
          </Box>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
