import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";

export const ImageBoxWrapper = styled(Box)`
  margin-left: 32px;
  margin-right: 32px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const ImageStyled = styled(Image)`
  @media (max-width: 768px) {
    height: 60px;
    width: 100px;
  }
  @media (max-width: 400px) {
    height: 40px;
    width: 60px;
  }
`;

export const MenuBoxWrapper = styled(Box)`
  margin-left: 32px;
  margin-right: 32px;
  display: { xs: "flex", md: "none" };
  @media (max-width: 526px) {
    margin: 0 10px;
  }
  
`;

export const HeaderButtonsWrapper = styled(Box)`
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderIconsWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
`;

export const HeaderButton = styled(Button)`
  display: block;
  margin: 16px 0px;
  background-color: #ffc93c;
  border-color: #ffc93c;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    padding: 4px 4px;
    font-size: 12px;
  }
  @media (max-width: 420px) {
    padding: 0;
    font-size: 10px;
    min-width: 56px;
  }
`;

export const HeaderBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: #f4f4f4;
  margin-right: 60px;
`;

export const HeaderTypography = styled(Typography)({
  padding: "0 50px 0 20px",
});

export const HeaderDiv = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
`;

export const PriceBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border: 1px solid black;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 0;
  }
`;
