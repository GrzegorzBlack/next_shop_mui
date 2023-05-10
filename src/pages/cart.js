import { useState } from "react";
import { useCart } from "../contexts/CartProvider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoginDialog from "../components/Modals/LoginUserDialog/LoginUserDialog";
import { Buttons } from "../components/Buttons/CartProductButtons/Buttons";
import {
  CartPageBox,
  BoxWrapper,
  DataGridWrapper,
  StyledBox,
  TableHeader,
  TableProductWrapper,
  ProductTypography,
  OneBox,
  HeaderTitleTypography,
  OneBoxName,
  BoxButtons,
  ProductNameBox,
} from "../styles/pagesStyles/cartStyles";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const cartState = useCart();
  const { dispatch } = useCart();

  const allProducts = Object.entries(cartState.state);

  const totalValue = allProducts.reduce(
    (prev, next) => prev + next[1].price * next[1].quantity,
    0
  );

  function finalModal() {
    if (Object.keys(cartState.state).length === 0) {
      return alert("Your cart is empty!");
    }
    setOpen(true);
    dispatch({ type: "DELETE_CART" });
  }

  const rowz = allProducts.map((product) => {
    return (
      <TableProductWrapper key={product[1].id}>
        <OneBoxName>
          <ProductTypography>{product[1].name}</ProductTypography>
        </OneBoxName>
        <OneBox>
          <HeaderTitleTypography>{`${product[1].price} zł`}</HeaderTitleTypography>
        </OneBox>
        <OneBox>
          <HeaderTitleTypography>{product[1].quantity}</HeaderTitleTypography>
        </OneBox>
        <BoxButtons>
          <Buttons productData={product} />
        </BoxButtons>
        <OneBox>
          <HeaderTitleTypography>
            {`${product[1].quantity * product[1].price} zł`}
          </HeaderTitleTypography>
        </OneBox>
      </TableProductWrapper>
    );
  });

  return (
    <CartPageBox>
      <BoxWrapper>
        <DataGridWrapper>
          <TableHeader>
            <ProductNameBox>
              <HeaderTitleTypography>Product name</HeaderTitleTypography>
            </ProductNameBox>
            <OneBox>
              <HeaderTitleTypography>Product price</HeaderTitleTypography>
            </OneBox>
            <OneBox>
              <HeaderTitleTypography>Quantity</HeaderTitleTypography>
            </OneBox>
            <BoxButtons>
              <HeaderTitleTypography>Actions</HeaderTitleTypography>
            </BoxButtons>
            <OneBox>
              <HeaderTitleTypography>Total price</HeaderTitleTypography>
            </OneBox>
          </TableHeader>
          {rowz}
        </DataGridWrapper>
        <StyledBox>
          <Box>
            <Typography>Total Cart Value</Typography>
            <Typography>{totalValue} PLN</Typography>
          </Box>
        </StyledBox>
        <Box sx={{ marginTop: "20px" }}>
          <StyledBox>
            <Button variant="outlined" onClick={finalModal}>
              Złóż zamówienie
            </Button>
          </StyledBox>
        </Box>
      </BoxWrapper>
      <LoginDialog
        onClose={() => setOpen(false)}
        show={open}
        dialogTextOne={"Dziękujemy za złożenie zamówienia w naszym sklepie!"}
        dialogTextTwo={"Czas oczekiwania na przesyłkę wynosi: Nie wiadomo. "}
        dialogTextThree={"Zapraszamy na kolejne zakupy!"}
        pushTo={"snacks"}
      />
    </CartPageBox>
  );
};

export default Cart;
