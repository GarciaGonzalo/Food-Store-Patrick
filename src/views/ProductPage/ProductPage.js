import { CloseButton } from "../../components/CloseButton/CloseButton";
import { CreateElement } from "../../helpers/CreateElement";
import { getProductPrice } from "../../helpers/GetProductPrice";
import { generatePriceContainerChildren } from "../../helpers/GeneratePriceContainerChildren";
import { AddButton } from "../../components/AddButton/AddButton";

// Getting product data from the localStorage, and filtering all the products to see which one matches.
const setProductPage = (products) => {
  const productId = localStorage.getItem("selected-product-food-patrick");
  localStorage.removeItem("input-search-value-food-patrick"); // Cleaning the input field after going into a product page
  const PRODUCT = products.find((product) => product.id === productId);

  return PRODUCT;
};

// Product page for small devices
const MobileProductPage = (product) => {
  // Title and close button elements
  const TITLE_PROPS = {
    tagName: "p",
    attributes: [{ prop: "id", value: "productPage__title" }],
    textContent: product.productName,
  };
  const $Title = CreateElement(TITLE_PROPS);

  const TITLE_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "productPage__titleContainer" }],
    children: [$Title, CloseButton()],
  };
  const $TitleContainer = CreateElement(TITLE_CONTAINER_PROPS);

  // Product image part
  const PRODUCT_IMAGE_PROPS = {
    tagName: "img",
    attributes: [
      { prop: "id", value: "productPage__image" },
      { prop: "src", value: product.imgSrc },
      { prop: "alt", value: `${product.productName} Image` },
    ],
  };
  const $Image = CreateElement(PRODUCT_IMAGE_PROPS);

  const PROD_IMAGE_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "productPage__imageContainer" }],
    children: [$Image],
  };
  const $ImageContainer = CreateElement(PROD_IMAGE_CONTAINER_PROPS);

  // Price part, with validations for products with discount
  const PROD_OLD_PRICE_PROPS = {
    tagName: "p",
    attributes: [{ prop: "id", value: "productPage__oldPrice" }],
    textContent: `$ ${product.price}`,
  };
  const $ProductOldPrice = CreateElement(PROD_OLD_PRICE_PROPS);

  //Dinamically getting product price depending on if it has or doesn't have discount
  const productPrice = getProductPrice(product);

  const PROD_PRICE_PROPS = {
    tagName: "p",
    attributes: [{ prop: "id", value: "productPage__productPrice" }],
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
    attributes: [{ prop: "id", value: "productPage__priceContainer" }],
    children: prodPriceContainerChildren,
  };
  const $ProductPriceContainer = CreateElement(PROD_PRICE_CONTAINER_PROPS);

  // Product description
  const PROD_DESCRIPTION_PROPS = {
    tagName: "p",
    attributes: [{ prop: "id", value: "productPage_description" }],
    textContent: product.description,
  };
  const $ProductDescription = CreateElement(PROD_DESCRIPTION_PROPS);

  const PROD_DESCRIPTION_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "productPage__descriptionContainer" }],
    children: [$ProductDescription],
  };
  const $ProductDescriptionContainer = CreateElement(
    PROD_DESCRIPTION_CONTAINER_PROPS
  );

  // Add to cart part
  const $AddButton = AddButton(product);

  const BUTTON_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "productPage__addButtonContainer" }],
    children: [$AddButton],
  };
  const $ButtonContainer = CreateElement(BUTTON_CONTAINER_PROPS);

  const GO_TO_CART_PROPS = {
    tagName: 'a',
    attributes: [{prop: 'id', value: 'productPage__goToCart'}, {prop: 'href', value: '#/cart'}],
    textContent: 'Ir al carrito de compras'
  }
  const $GoToCart = CreateElement(GO_TO_CART_PROPS);

  const GO_TO_CART_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "productPage__goToCartContainer" }],
    children: [$GoToCart],
  };
  const $GoToCartContainer = CreateElement(
    GO_TO_CART_CONTAINER_PROPS
  );
  // Getting all the parts together
  const MOBILE_PRODUCT_PAGE_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "productPage" }],
    children: [
      $TitleContainer,
      $ImageContainer,
      $ProductPriceContainer,
      $ProductDescriptionContainer,
      $ButtonContainer,
      $GoToCartContainer
    ],
  };

  const $MobileProductPage = CreateElement(MOBILE_PRODUCT_PAGE_PROPS);
  return $MobileProductPage;
};

// Product Page export

export const ProductPage = (context) => {
  const PRODUCT = setProductPage(context.products);
  const WH = window.innerWidth;
  let $ProductPage;

  $ProductPage = MobileProductPage(PRODUCT);

  return $ProductPage;
};
