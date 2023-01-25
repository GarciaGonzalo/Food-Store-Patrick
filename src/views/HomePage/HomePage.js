import { Header } from "../../components/Header/Header";
import { ProductsContainer } from "../../components/ProductsContainer/ProductsContainer";

export const HomePage = (context) => {
  let template = "";
  template += Header(context);
  template += ProductsContainer(context.products);
  return template;
};
