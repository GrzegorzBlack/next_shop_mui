import Link from "next/link";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ButtonStyled } from "./Button/ButtonStyles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

const buttonSX = {
  "&:hover": {
    borderColor: "rgba(255,240,10,0.8)",
  },
};

const CartButton = ({ to }) => {
  return (
    <Link href={to}>
      <IconButton>
        <ShoppingCartIcon sx={{ fontSize: 48 }} />
      </IconButton>
    </Link>
  );
};
export default CartButton;
