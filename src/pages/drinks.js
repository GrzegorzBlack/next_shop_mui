import Page2 from "../components/Page/Page";
import { useProducts } from "../contexts/ProductsProvider";

const Drinks = () => {
  const drinksState = useProducts().drinks;

  return <Page2 productsState={drinksState} />;
};

export default Drinks;
