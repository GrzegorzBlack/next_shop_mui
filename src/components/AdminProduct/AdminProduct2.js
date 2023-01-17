import ListItemText from "@mui/material/ListItemText";
import { AdminListItem, StyledListItemButton } from "./AdminProduct2Styles";

export const AdminProduct2 = ({ id, dispatch, name, price }) => {
  const handleCLick = () => {
    dispatch({ id, type: "DELETE_PRODUCT" });
  };
  return (
    <AdminListItem>
      <ListItemText sx={{ flex: "0 0 170px" }}>{name}</ListItemText>
      <ListItemText sx={{ flex: "0 0 50px" }}>{`${price} zł`}</ListItemText>
      <StyledListItemButton onClick={handleCLick} sx={{ flex: "0 0 130px" }}>
        Delete product
      </StyledListItemButton>
    </AdminListItem>
  );
};
