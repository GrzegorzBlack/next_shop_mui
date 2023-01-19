import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { Typography } from "@mui/material";

const ProductDialog = ({ show, onClose, productName }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <Dialog open={show}>
      <DialogContent>
        <DialogContentText sx={{ color: "black" }}>
          {"You added "}
          <Typography display="inline" sx={{ fontSize: "20px" }}>
            {`" ${productName} "`}
          </Typography>
          {" to your cart."}
        </DialogContentText>
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
