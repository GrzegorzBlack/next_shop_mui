import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TypographyStyled, DialogBox } from "./LoginUserDialogStyles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const LoginDialog = ({
  show,
  onClose,
  userLogged,
  dialogTextOne,
  dialogTextTwo,
  dialogTextThree,
  pushTo,
}) => {
  const router = useRouter();

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
    pushTo ? router.push(`/${pushTo}`) : null;
  };
  return (
    <Dialog open={show}>
      {userLogged ? (
        <DialogTitle>
          <DialogBox>
            <Typography sx={{ fontSize: "30px" }}>Hello</Typography>{" "}
            <TypographyStyled sx={{ fontSize: "30px" }}>
              {userLogged}
            </TypographyStyled>
            <Typography sx={{ fontSize: "30px" }}>!</Typography>
          </DialogBox>
        </DialogTitle>
      ) : null}
      <DialogContent>
        <DialogContentText sx={{ color: "black" }}>
          {dialogTextOne}
        </DialogContentText>
        {dialogTextTwo ? (
          <DialogContentText sx={{ pt: 2 }}>{dialogTextTwo}</DialogContentText>
        ) : null}
        {dialogTextThree ? (
          <DialogContentText sx={{ pt: 2 }}>
            {dialogTextThree}
          </DialogContentText>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={(e) => handleCloseClick(e)}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
