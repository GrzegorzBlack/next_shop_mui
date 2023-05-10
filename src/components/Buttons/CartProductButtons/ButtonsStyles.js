import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const CartButtonWrapper = styled(Box)`
  display: flex;

  justify-content: center;
`;

export const CartButton = styled(Button)`
  margin: 0 1px;
  @media (max-width: 768px) {
    min-width: 20px;
  }
  @media (max-width: 480px) {
    padding: 6px 10px;
    margin: 0 2px;
  }
  @media (max-width: 400px) {
    padding: 2px 4px;
  }
`;
