import { useProducts } from "../contexts/ProductsProvider";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import ProductsTable from "../components/ProductsTable/ProductsTable";
import {
  AdminPageWrapper,
  StyledBoxWrapper,
  AdminFormWrapper,
} from "../styles/pagesStyles/adminStyle";
import LoginDialog from "../components/Modals/LoginUserDialog/LoginUserDialog";

const Admin = () => {
  const [open, setOpen] = useState(true);

  const { snacks: snacksState } = useProducts();
  const { dispatch: dispatchSnacks } = useProducts();

  const { drinks: drinksState } = useProducts();
  const { dispatch: dispatchDrinks } = useProducts();

  const { spirits: spiritsState } = useProducts();
  const { dispatch: dispatchSpirits } = useProducts();

  return (
    <>
      <AdminPageWrapper>
        <ProductsTable items={snacksState} dispatchProduct={dispatchSnacks} />
        <ProductsTable items={drinksState} dispatchProduct={dispatchDrinks} />
        <ProductsTable items={spiritsState} dispatchProduct={dispatchSpirits} />

        <StyledBoxWrapper>
          <AdminFormWrapper>
            <Form />
          </AdminFormWrapper>
        </StyledBoxWrapper>
      </AdminPageWrapper>
      <LoginDialog
        onClose={() => setOpen(false)}
        show={open}
        userLogged={"Admin"}
        dialogTextOne={"After you finish you work, please remember to logout."}
      />
    </>
  );
};

export default Admin;
