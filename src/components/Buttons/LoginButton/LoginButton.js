import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import PersonIcon from "@mui/icons-material/Person";
import { ButtonStyled, BoxDropdown } from "../Button/ButtonStyles";
import { PersonIconStyled } from "./LoginButtonStyles";
import IconButton from "@mui/material/IconButton";

const UserButton = ({ to }) => {
  return (
    <BoxDropdown>
      <Link href={to}>
        <IconButton>
          <PersonIconStyled />
        </IconButton>
        {/* </ButtonStyled> */}
      </Link>
    </BoxDropdown>
  );
};
export default UserButton;
