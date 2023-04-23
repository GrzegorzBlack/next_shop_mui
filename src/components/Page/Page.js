import { useState } from "react";
import { useCart } from "../../contexts/CartProvider";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import ProductDialog from "../Modals/ProductDialog";
import { DataGridBox } from "./PageStyles";

const Page = ({ productsState }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const { dispatch } = useCart();

  const handleCellCLick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowCLick = (param, event) => {
    event.stopPropagation();
  };

  const handleClick = (event, cellValues) => {
    setShowModal(true);
    setName(cellValues.row.col1);
    const id = cellValues.row.id;
    const { category } = productsState[0];
    const name = cellValues.row.col1;
    const price = cellValues.row.col2.slice(0, -3);

    dispatch({ id, category, name, price, type: "ADD_PRODUCT" });
  };

  const columns = [
    { field: "col1", headerName: "Product name", maxWidth: 160, flex: 1 },
    {
      field: "col2",
      headerName: "Product price",
      type: "number",
      maxWidth: 160,
      flex: 1,
    },
    {
      field: "col3",
      headerName: "Click to Buy",
      maxWidth: 150,
      flex: 1,
      type: "number",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            Buy
          </Button>
        );
      },
    },
  ];

  const rowz = productsState.map((product) => ({
    id: `${product.id}`,
    col1: `${product.name}`,
    col2: `${product.price} zł`,
  }));

  return (
    <DataGridBox>
      <DataGrid
        rows={rowz}
        columns={columns}
        onCellClick={handleCellCLick}
        onRowClick={handleRowCLick}
      />

      {showModal ? (
        <ProductDialog
          onClose={() => setShowModal(false)}
          show={showModal}
          productName={name}
        />
      ) : null}
    </DataGridBox>
  );
};

export default Page;
