import { useState } from "react";
import { useCart } from "../contexts/CartProvider";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoginDialog from "../components/Modals/LoginUserDialog";
import {
  CartPageBox,
  BoxWrapper,
  DataGridWrapper,
  StyledBox,
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

  const handleAddOne = (event, cellValues) => {
    const product = cellValues.id + cellValues.row.col2;
    dispatch({ product, type: "ADD_QUANTITY" });
  };

  const handleMinusOne = (event, cellValues) => {
    const product = cellValues.id + cellValues.row.col2;
    dispatch({ product, type: "SUBSTRACT_QUANTITY" });
  };

  const handleDelete = (event, cellValues) => {
    const product = cellValues.id + cellValues.row.col2;
    dispatch({ product, type: "DELETE_PRODUCT" });
  };

  const columns = [
    { field: "col1", headerName: "Product name", width: 160 },
    {
      field: "col2",
      headerName: "Category",
      hide: "true",
    },
    { field: "col3", headerName: "Product price", type: "number", width: 160 },
    { field: "col4", headerName: "Quantity", type: "number", width: 160 },
    {
      field: "col5",
      headerName: "Actions",
      headerAlign: "center",
      width: 260,
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleAddOne(event, cellValues);
              }}
            >
              +
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleMinusOne(event, cellValues);
              }}
            >
              -
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={(event) => {
                handleDelete(event, cellValues);
              }}
              style={{ fontSize: "10px" }}
            >
              <div>Delete product</div>
            </Button>
          </>
        );
      },
    },
    { field: "col6", headerName: "Total price", type: "number", width: 160 },
  ];

  const rows = allProducts.map((product) => ({
    id: `${product[1].id}`,
    col1: `${product[1].name}`,
    col2: `${product[1].category}`,
    col3: `${product[1].price} zł`,
    col4: `${product[1].quantity}`,
    col5: `${product[1].quantity * product[1].price} zł`,
    col6: `${product[1].quantity * product[1].price} zł`,
  }));

  return (
    <CartPageBox>
      <BoxWrapper>
        <DataGridWrapper>
          <DataGrid rows={rows} columns={columns} />
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
