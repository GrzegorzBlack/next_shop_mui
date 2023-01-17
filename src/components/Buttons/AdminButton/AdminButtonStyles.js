import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const BoxDropdown = styled(Box)(() => ({
  position: "relative",
  display: "inline-block",
  "&:hover .css-1x07gue": {
    display: "block",
  },
}));

export const BoxDropdownContent = styled(Box)`
  width: 100px;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const AContentStyled = styled("a")(() => ({
  width: "100px",
  color: "black",
  padding: "12px 16px",
  textDecoration: "none",
  display: "block",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#CDFCF6",
  },
}));

export const TypographyStyled = styled(Typography)`
  display: flex;
  margin-top: 6px;
  font-size: 18px;
  padding-left: 16px;
  color: black;
  border-bottom: 1px solid black;
`;
