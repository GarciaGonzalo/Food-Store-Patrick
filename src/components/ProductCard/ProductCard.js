import { Link } from "../Link/Link";

export const ProductCard = (product) => {
  let template = `<div class="product-card">
            <img class="product-card__image" src=${product.imgSrc} alt="${product.productName} image"/>`;
  if (product.hasDiscount) {
    template += `<div product-card__discount>- ${product.discountPercentage} %</div>`;
  }
  template += `<div class="product-card__info-container">
            <p class="product-card__product_name">${product.productName}</p>`;
  if (product.hasDiscount) {
    template += `<p class="product-card__old_price">${product.price}</p>
    <p class="product-card__product_price">${
      (product.price * (100 - product.discountPercentage)) / 100
    }</p>`;
  } else {
    template += `<p class="product-card__product_price">${product.price}</p>`;
  }
  const showMore = `<div id='${product.id}' class="product-card__show-more">+</div>`;
  template += Link(showMore);
  template += `</div></div>`;

  return template;
};
