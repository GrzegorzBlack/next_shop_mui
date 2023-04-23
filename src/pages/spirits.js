import Page2 from "../components/Page/Page";
import { useProducts } from "../contexts/ProductsProvider";

const Spirits = () => {
  const spiritsState = useProducts().spirits;

  return <Page2 productsState={spiritsState} />;
};

export default Spirits;
