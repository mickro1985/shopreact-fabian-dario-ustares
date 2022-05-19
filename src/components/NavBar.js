import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
//import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CartWidget from "./CartWidget";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            component={RouterLink}
            underline="none"
            color="inherit"
            variant="h5"
            sx={{ mr: 2 }}
            to="/"
          >
            REACT-SHOP
          </Link>
          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            <Link component={RouterLink} to="/category/1">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Notebooks
              </Button>
            </Link>
            <Link component={RouterLink} to="/category/2">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Monitores
              </Button>
            </Link>
            <Link component={RouterLink} to="/category/3">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Impresoras
              </Button>
            </Link>
          </Box>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
