import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { DialogContent } from "@mui/material";

export const DialogBox = styled(Box)`
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    min-width: 120px;
    flex-direction: column;
    padding: 4px 4px;
  }
`;

export const ContentStyled = styled(DialogContent)`
  font-size: 20px;
  @media (max-width: 480px) {
    padding: 10px 4px;
    font-size: 14px;
  }
`;

export const DialogTypography = styled(Typography)`
  display: inline;
  font-size: 20px;
  margin: 0 6px;
  @media (max-width: 480px) {
    margin: 4px 4px;
    font-size: 14px;
    font-weight: bold;
  }
`;
