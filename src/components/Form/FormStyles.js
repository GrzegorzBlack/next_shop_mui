import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";

export const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-content: space-evenly;
  @media (max-width: 1025px) {
    width: auto;
  }
`;

export const StyledFormControl = styled(FormControl)`
  width: auto;
`;
