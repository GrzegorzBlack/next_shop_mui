import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

export const CartPageBox = styled(Box)`
  display: flex;
  justify-content: center;
  height: auto;
  margin: 20px;
  @media (max-width: 768px) {
    margin: 4px;
  }
`;

export const BoxWrapper = styled(Box)`
  width: 80%;
  padding-bottom: 20px;
  border: 2px solid gray;
  @media (max-width: 1024px) {
    width: 96%;
  }
  @media (max-width: 768px) {
    width: 98%;
  }
`;

export const TableHeader = styled(Box)`
  display: flex;
  justify-content: space-around;

  border-bottom: 1px solid gray;
`;

export const TableProductWrapper = styled(Box)`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid gray;
`;

export const OneBoxName = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 16%;
  height: 50px;
`;

export const ProductNameBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 16%;
  height: 50px;
`;

export const OneBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 50px;
`;

export const BoxButtons = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 50px;
`;

export const HeaderTitleTypography = styled(Typography)`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ProductTypography = styled(Typography)`
  display: flex;
  justify-content: flex-start;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const DataGridWrapper = styled(Box)`
  width: 100%;
  marginleft: 100px;
`;

export const DataGridStyled = styled(DataGrid)`
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin: 15px 12px;
`;

export const CartButtonWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const CartButton = styled(Button)`
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
