import Link from "next/link";
import { useAdmin } from "../../../contexts/AdminProvider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import {
  BoxDropdown,
  AStyled,
  BoxDropdownContent,
  AContentStyled,
} from "./AdminButtonStyles";

const AdminButton = ({ to, toAdmin }) => {
  const dispatchIsLogged = useAdmin().dispatch;

  const handleCLick = () => {
    dispatchIsLogged({ type: "UNLOGGED" });
  };
  return (
    <BoxDropdown>
      <Link href={to}>
        <AStyled>
          <AdminPanelSettingsIcon />
        </AStyled>
      </Link>
      <BoxDropdownContent>
        <Link href={toAdmin}>
          <AContentStyled>Admin</AContentStyled>
        </Link>
        <Link href={to}>
          <AContentStyled onClick={handleCLick}>Log out</AContentStyled>
        </Link>
      </BoxDropdownContent>
    </BoxDropdown>
  );
};
export default AdminButton;
