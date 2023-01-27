import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ProductsContainer } from "../../components/ProductsContainer/ProductsContainer";
import { CreateElement } from "../../helpers/CreateElement";

export const HomePage = async (context) => {
  const PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "homePage" }],
    children: [await Header(context), await ProductsContainer(context.products), Footer()],
  };

  const $HomePage = CreateElement(PROPS);
  return $HomePage;
};
