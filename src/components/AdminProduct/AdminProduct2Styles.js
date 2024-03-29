import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const AdminListItem = styled(ListItem)`
  dispaly: flex;
  justify-content: space-between;
  width: 400px;
  border: 2px solid green;
  background-color: #669bbc;
`;
export const AdminListItemText = styled(ListItemText)`
  flex-basis: 170px;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const StyledListItemButton = styled(ListItemButton)`
  width: 130px;
  padding: 8px;
  border: 2px solid black;
`;
