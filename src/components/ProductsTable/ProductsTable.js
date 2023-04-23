import * as React from "react";
import {
  Button,
  Table,
  TableBody,
  TableContainer,
  TableRow,
} from "@mui/material";
import { StyledTableCell } from "./ProductsTableStyles";

export default function ProductsTable({ items, dispatchProduct }) {
  const handleClick = (id) => {
    dispatchProduct({ id, type: "DELETE_PRODUCT" });
  };
  return (
    <TableContainer sx={{ border: "2px solid black" }}>
      <Table>
        <TableBody>
          {items.map((product) => (
            <TableRow key={product.id + product.category}>
              <StyledTableCell>{product.name}</StyledTableCell>
              <StyledTableCell>{product.price}</StyledTableCell>
              <StyledTableCell>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleClick(product.id)}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
