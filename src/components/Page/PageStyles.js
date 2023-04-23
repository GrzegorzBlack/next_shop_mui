import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const DataGridBox = styled(Box)`
  max-width: 550px;
  height: 500px;
  margin-left: 100px;
  @media (max-width: 768px) {
    margin: auto;
  }
`;
