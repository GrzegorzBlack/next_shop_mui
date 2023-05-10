import { useCart } from "../../../contexts/CartProvider";

import { CartButtonWrapper, CartButton } from "./ButtonsStyles";

export const Buttons = ({ productData }) => {
  const { dispatch } = useCart();

  const product = productData[1].id + productData[1].category;

  const handleAddOne = () => {
    dispatch({ product, type: "ADD_QUANTITY" });
  };

  const handleMinusOne = () => {
    dispatch({ product, type: "SUBSTRACT_QUANTITY" });
  };

  const handleDelete = () => {
    dispatch({ product, type: "DELETE_PRODUCT" });
  };

  return (
    <CartButtonWrapper>
      <CartButton
        variant="contained"
        color="primary"
        onClick={() => {
          handleAddOne();
        }}
      >
        +
      </CartButton>
      <CartButton
        variant="contained"
        color="primary"
        onClick={() => {
          handleMinusOne();
        }}
      >
        -
      </CartButton>
      <CartButton
        variant="contained"
        color="primary"
        onClick={() => {
          handleDelete();
        }}
      >
        <div>X</div>
      </CartButton>
    </CartButtonWrapper>
  );
};
