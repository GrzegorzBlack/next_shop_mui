import Link from "next/link";
import Button from "@mui/material/Button";
import {
  MainPageWrapper,
  WelcomeWrapper,
  WelcomeBox,
  OptionsBoxWrapper,
  ORBox,
  OptionsBox,
  OptionsButton,
  OptionsBoxWrapperTypography,
  WelcomeTypography,
  ChooseTypography,
  ORTypography,
} from "../styles/pagesStyles/indexStyles";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <Container fixed>
      <MainPageWrapper>
        <WelcomeWrapper>
          <WelcomeBox>
            <WelcomeTypography>Welcome to React Shop!</WelcomeTypography>
            <ChooseTypography>Choose your buying options:</ChooseTypography>
          </WelcomeBox>
        </WelcomeWrapper>
        <ORBox>
          <div>
            <ORTypography>OR</ORTypography>
          </div>
        </ORBox>
        <OptionsBoxWrapper>
          <OptionsBox>
            <OptionsBoxWrapperTypography>
              Log in if you already have an account
            </OptionsBoxWrapperTypography>
            <Link href="/login">
              <OptionsButton variant="outlined">Log In</OptionsButton>
            </Link>
            <OptionsBoxWrapperTypography>
              If not click to Register
            </OptionsBoxWrapperTypography>
            <Link href="/register">
              <Button variant="outlined">Register</Button>
            </Link>
          </OptionsBox>
          <OptionsBox>
            <OptionsBoxWrapperTypography>
              Buy without logging{" "}
            </OptionsBoxWrapperTypography>
            <Link href="/snacks">
              <Button variant="outlined">Click</Button>
            </Link>
          </OptionsBox>
        </OptionsBoxWrapper>
      </MainPageWrapper>
    </Container>
  );
}
