import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
      {userLogged ? <DialogTitle>Hello {userLogged}!</DialogTitle> : null}
      <DialogContent>
        <DialogContentText>{dialogTextOne}</DialogContentText>
        {dialogTextTwo ? (
          <DialogContentText>{dialogTextTwo}</DialogContentText>
        ) : null}
        {dialogTextThree ? (
          <DialogContentText>{dialogTextThree}</DialogContentText>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={(e) => handleCloseClick(e)}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
