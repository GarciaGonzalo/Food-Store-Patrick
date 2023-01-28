import { CreateElement } from "../../helpers/CreateElement";
import { getProductPrice } from "../../helpers/GetProductPrice";
import { generatePriceContainerChildren } from "../../helpers/GeneratePriceContainerChildren";

export const ProductCard = async (product) =>  {
  // Generate product image
  const PROD_IMG_PROPS = {
    tagName: "img",
    attributes: [
      { prop: "class", value: "product-card__image" },
      { prop: "src", value: product.imgSrc },
      { prop: "alt", value: `${product.productName} Image` },
    ],
  };
  const $ProductImage = CreateElement(PROD_IMG_PROPS);

  // Generate product name
  const PROD_NAME_PROPS = {
    tagName: "p",
    attributes: [{ prop: "class", value: "product-card__product-name" }],
    textContent: product.productName,
  };
  const $ProductName = CreateElement(PROD_NAME_PROPS);

  // Discount and price generation (validating if the product has discount)
  const PROD_DISCOUNT_PROPS = {
    tagName: "div",
    attributes: [{ prop: "class", value: "product-card__discount" }],
    textContent: `-${product.discountPercentage}%`,
  };
  const $ProductDiscount = CreateElement(PROD_DISCOUNT_PROPS);

  const PROD_OLD_PRICE_PROPS = {
    tagName: "p",
    attributes: [{ prop: "class", value: "product-card__old-price" }],
    textContent: `$ ${product.price}`,
  };
  const $ProductOldPrice = CreateElement(PROD_OLD_PRICE_PROPS);

  //Dinamically getting product price depending on if it has or doesn't have discount
  const productPrice = getProductPrice(product);

  const PROD_PRICE_PROPS = {
    tagName: "p",
    attributes: [{ prop: "class", value: "product-card__product-price" }],
    textContent: `$ ${productPrice}`,
  };
  const $ProductPrice = CreateElement(PROD_PRICE_PROPS);

  // Generating the DOM elements depending on if the product has or doesn't have discount
  const prodPriceContainerChildren = generatePriceContainerChildren(
    product,
    $ProductOldPrice,
    $ProductPrice
  );

  const PROD_PRICE_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "class", value: "product-card__price-container" }],
    children: prodPriceContainerChildren,
  };
  const $ProductPriceContainer = CreateElement(PROD_PRICE_CONTAINER_PROPS);

  // Generating the product info container
  const PROD_INFO_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "class", value: "product-card__info-container" }],
    children: [$ProductName, $ProductPriceContainer],
  };
  const $ProductInfoContainer = CreateElement(PROD_INFO_CONTAINER_PROPS);

  const GO_TO_PRODUCT_PAGE_PROPS = {
    tagName: "a",
    attributes: [
      { prop: "id", value: product.id },
      { prop: "class", value: "product-card__go-to-product-page" },
      { prop: "href", value: `#/product/${product.id}` },
    ],
    textContent: "Ver producto",
  };
  const $GoToProductPage = CreateElement(GO_TO_PRODUCT_PAGE_PROPS);

  // Function for saving the selected product and rendering the correct page
  const saveSelectedProduct = ({ target }) => {
    if (target.id !== product.id) {
      return;
    }
    localStorage.setItem("selected-product-food-patrick", product.id);
  };

  document.addEventListener("click", saveSelectedProduct);
  document.removeEventListener("unload", saveSelectedProduct);

  // Function to dinamically generate children nodes in each product card, depending on if it has or doesn't have discount
  let children = [];

  const generateProductChildren = (
    prod,
    ProductImage,
    ProductDiscount,
    ProductInfoContainer,
    GoToProductPage
  ) => {
    children.push(ProductImage);
    if (prod.hasDiscount) {
      children.push(ProductDiscount);
    }
    children.push(ProductInfoContainer);
    children.push(GoToProductPage);
  };

  generateProductChildren(
    product,
    $ProductImage,
    $ProductDiscount,
    $ProductInfoContainer,
    $GoToProductPage
  );

  // PRODUCTO. AL FINAL DE TODO
  const PRODUCT_PROPS = {
    tagName: "div",
    attributes: [
      { prop: "id", value: `product${product.id}` },
      { prop: "class", value: "product-card" },
    ],
    children,
  };

  const $ProductCard = CreateElement(PRODUCT_PROPS);
  return $ProductCard;
};
