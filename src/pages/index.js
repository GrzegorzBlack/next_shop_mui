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
} from "../styles/pagesStyles/indexStyles";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <Container fixed>
      <MainPageWrapper>
        <WelcomeWrapper>
          <WelcomeBox>
            <h1>Welcome to React Shop!</h1>
            <h2>Choose your buying options:</h2>
          </WelcomeBox>
        </WelcomeWrapper>
        <ORBox>
          <div>
            <h1>OR</h1>
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
