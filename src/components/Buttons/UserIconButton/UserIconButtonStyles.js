import { styled } from "@mui/material/styles";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export const VerifiedUserIconStyled = styled(VerifiedUserIcon)`
  font-size: 48px;
  @media (max-width: 510px) {
    font-size: 38px;
  }
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;
