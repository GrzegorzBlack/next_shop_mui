import Link from "next/link";
import { BoxDropdown } from "../Button/ButtonStyles";
import { PersonIconStyled, LoginIconButtonStyled } from "./LoginButtonStyles";

const UserButton = ({ to }) => {
  return (
    <BoxDropdown>
      <Link href={to}>
        <LoginIconButtonStyled>
          <PersonIconStyled />
        </LoginIconButtonStyled>
      </Link>
    </BoxDropdown>
  );
};
export default UserButton;
