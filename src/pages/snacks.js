import Page2 from "../components/Page2";
import { useProducts } from "../contexts/ProductsProvider";

const Snacks = () => {
  const snacksState = useProducts().snacks;

  return <Page2 productsState={snacksState} />;
};

export default Snacks;
