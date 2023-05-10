import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import {
  DialogBox,
  ContentStyled,
  DialogTypography,
} from "./ProductDialogStyles";

const ProductDialog = ({ show, onClose, productName }) => {
  const handleCloseClick = () => {
    onClose();
  };

  const keyPress = (e) => {
    if (e.keyCode == 0) {
      onClose();
    }
  };
  return (
    <Dialog open={show} onKeyPress={keyPress}>
      <ContentStyled>
        <DialogBox>
          {"You added"}
          <DialogTypography>{`"${productName}"`}</DialogTypography>
          {"to your cart."}
        </DialogBox>
      </ContentStyled>
      <DialogActions>
        <Button autoFocus variant="outlined" onClick={handleCloseClick}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
