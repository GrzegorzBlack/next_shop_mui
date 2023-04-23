import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";

export const PersonIconStyled = styled(PersonIcon)`
  font-size: 48px;
  @media (max-width: 510px) {
    font-size: 38px;
  }
  @media (max-width: 400px) {
    font-size: 28px;
  }
`;

export const LoginIconButtonStyled = styled(IconButton)`
  @media (max-width: 400px) {
    padding: 2px;
  }
`;
