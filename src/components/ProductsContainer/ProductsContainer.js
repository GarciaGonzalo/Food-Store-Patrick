import { ProductCard } from "../ProductCard/ProductCard.js";

export const ProductsContainer = (products) => {
  let template = '<div id="productsContainer" >'
  for (let product of products) {
    template += ProductCard(product);
  }
  template += "</div>"
  return template;
};
