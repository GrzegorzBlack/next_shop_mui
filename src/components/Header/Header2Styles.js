import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export const ImageBoxWrapper = styled(Box)`
  @media (max-width: 810px) {
    margin: 0;
  }
`;

export const ImageStyled = styled(Box)`
  margin-right: 8px;
  @media (max-width: 768px) {
    height: 60px;
    width: 90px;
    margin: 2px;
  }

  @media (max-width: 420px) {
    height: 30px;
    width: 36px;
    margin: 2px;
    display: none;
  }

  @media (max-width: 420px) {
    height: 30px;
    width: 36px;
    margin: 2px;
    display: none;
  }
`;

export const MenuBoxWrapper = styled(Box)`
  margin-left: 32px;
  margin-right: 32px;
  @media (max-width: 780px) {
    margin-left: 24px;
    margin-right: 24px;
  }
  @media (max-width: 580px) {
    margin-left: 2px;
    margin-right: 2px;
  }
`;

export const HeaderButtonsWrapper = styled(Box)`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
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
  @media (max-width: 580px) {
    padding: 4px 4px;
    font-size: 12px;
  }
  @media (max-width: 480px) {
    padding: 2 0;
    font-size: 8px;
    width: auto;
    margin: 0 2px;
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
    width: 58px;
    font-size: 12px;
  }
  @media (max-width: 480px) {
    width: 48px;
    font-size: 10px;
  }
`;

export const PriceTypography = styled(Typography)`
  font-size: 16px;
  border-color: "black";
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
