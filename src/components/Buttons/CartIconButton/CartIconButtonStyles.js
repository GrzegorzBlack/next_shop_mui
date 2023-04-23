import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

export const ShoppingCartIconStyled = styled(ShoppingCartIcon)`
  font-size: 48px;
  @media (max-width: 510px) {
    font-size: 38px;
  }
  @media (max-width: 400px) {
    font-size: 28px;
  }
`;

export const ShoppingCartIconButtonStyled = styled(IconButton)`
  @media (max-width: 400px) {
    padding: 2px;
  }
`;
