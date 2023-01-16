import Link from "next/link";
import { useCart } from "../../contexts/CartProvider";
import { useUser } from "../../contexts/UserProvider";
import IconButton from "@mui/material/IconButton";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserTie } from "@fortawesome/free-solid-svg-icons";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import {
  BoxDropdown,
  AStyled,
  BoxDropdownContent,
  AContentStyled,
  TypographyStyled,
} from "./AdminButton/AdminButtonStyles";

const UserLoggedButton = ({ to }) => {
  const dispatchCart = useCart().dispatch;
  const dispatchIsLogged = useUser().dispatch;
  const stateOfUser = useUser().state;

  const { userName } = stateOfUser;

  const handleCLick = () => {
    const payload = {
      isLogged: false,
      userName: userName,
    };
    dispatchCart({ type: "DELETE_CART" });
    dispatchIsLogged({ type: "LOGGED_UNLOGGED", payload });
  };
  return (
    <BoxDropdown>
      <Link href={to}>
        <IconButton>
          <VerifiedUserIcon sx={{ fontSize: 48 }} />
        </IconButton>
      </Link>
      <BoxDropdownContent>
        <TypographyStyled>{userName}</TypographyStyled>
        <Link href={to}>
          <AContentStyled onClick={handleCLick}>Log out</AContentStyled>
        </Link>
      </BoxDropdownContent>
    </BoxDropdown>
  );
};
export default UserLoggedButton;
