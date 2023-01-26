export const generatePriceContainerChildren = (
    product,
  ProductOldPrice,
  ProductPrice
) => {
  let prodPriceContainerChildren = [];

  if (product.hasDiscount) {
    prodPriceContainerChildren.push(ProductOldPrice);
  }
  prodPriceContainerChildren.push(ProductPrice);

  return prodPriceContainerChildren;
};
