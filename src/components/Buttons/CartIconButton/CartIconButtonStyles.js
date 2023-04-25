import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

export const ShoppingCartIconStyled = styled(ShoppingCartIcon)`
  font-size: 48px;
  @media (max-width: 586px) {
    font-size: 32px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const ShoppingCartIconButtonStyled = styled(IconButton)`
  @media (max-width: 480px) {
    padding: 2px;
  }
`;
