import IconButton from "@mui/material/IconButton";
//import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function CartWidget() {
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
        <ShoppingCartIcon />
      </IconButton>
    </>
  );
}

export default CartWidget;
