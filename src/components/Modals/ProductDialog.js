import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { DialogBox } from "./LoginUserDialog/LoginUserDialogStyles";

import { Typography } from "@mui/material";

const ProductDialog = ({ show, onClose, productName }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <Dialog open={show}>
      <DialogContent sx={{ fontSize: "20px" }}>
        <DialogBox>
          {"You added  "}
          <Typography
            display="inline"
            sx={{ fontSize: "20px", margin: "0 6px" }}
          >
            {`"${productName}"`}
          </Typography>
          {"  to your cart."}
        </DialogBox>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={(e) => handleCloseClick(e)}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
