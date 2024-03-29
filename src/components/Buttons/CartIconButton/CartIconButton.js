import Link from "next/link";
import { useRouter } from "next/router";
import {
  ShoppingCartIconStyled,
  ShoppingCartIconButtonStyled,
} from "./CartIconButtonStyles";

const CartButton = ({ to }) => {
  const { pathname } = useRouter();
  return (
    <ShoppingCartIconButtonStyled
      disabled={
        pathname === "/" || pathname === "/login" || pathname === "/register"
          ? true
          : false
      }
    >
      <Link href={to}>
        <ShoppingCartIconStyled />
      </Link>
    </ShoppingCartIconButtonStyled>
  );
};
export default CartButton;
