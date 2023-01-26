export const getProductPrice = (product) => {
  let productPrice;
  product.hasDiscount
    ? (productPrice =
        (product.price * (100 - product.discountPercentage)) / 100)
    : (productPrice = product.price);

  return productPrice;
};
