import { CreateElement } from "../../helpers/CreateElement.js";
import { ProductCard } from "../ProductCard/ProductCard.js";

export const ProductsContainer = async (products) => {
  const children = [];
  for (let product of products) {
    let card = await ProductCard(product);    
    children.push(card)
  }

  const PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "productsContainer" }],
    children,
  };

  const $ProductsContainer = CreateElement(PROPS);

  return $ProductsContainer;
};
