import { Context } from "../../helpers/Context";
import { CreateElement } from "../../helpers/CreateElement";
import { getProductPrice } from "../../helpers/GetProductPrice";
import { CartButton } from "../CartButton/CartButton";
import { ClearCart } from "../ClearCart/ClearCart";

export const CartProductCard = async (productInCart) => {
  const CONTEXT = await Context();
  const { cart } = CONTEXT;
  const { product, quantity } = productInCart;

  // Product image
  const PROD_IMG_PROPS = {
    tagName: "img",
    attributes: [
      { prop: "class", value: "cart-product-card__image" },
      { prop: "src", value: product.imgSrc },
      { prop: "alt", value: `${product.productName} Image` },
    ],
  };
  const $ProductImage = CreateElement(PROD_IMG_PROPS);

  // Product name and quantity
  const PROD_NAME_PROPS = {
    tagName: "p",
    attributes: [{ prop: "class", value: "cart-product-card__product-name" }],
    textContent: product.productName,
  };
  const $ProductName = CreateElement(PROD_NAME_PROPS);

  const PRODUCT_NAME_QUANTITY_PROPS = {
    tagName: "p",
    attributes: [{ prop: "class", value: "cart-product-card__quantity" }],
    textContent: `${quantity} unidades`,
  };
  const $ProductUnits = CreateElement(PRODUCT_NAME_QUANTITY_PROPS);

  const NAME_QUANTITY_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [
      {
        prop: "class",
        value: "cart-product-card__name-and-quantity-container",
      },
    ],
    children: [$ProductName, $ProductUnits],
  };

  const $NameAndQuantityContainer = CreateElement(
    NAME_QUANTITY_CONTAINER_PROPS
  );

  // Add and substract buttons
  const BUTTONS_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [
      { prop: "class", value: "cart-product-card__buttons-container" },
    ],
    children: [
      CartButton(product.id, "add", cart),
      CartButton(product.id, "substract", cart),
    ],
  };
  const $ButtonsContainer = CreateElement(BUTTONS_CONTAINER_PROPS);

  // Showing the total price
  const productPrice = getProductPrice(product) * quantity;

  const PROD_PRICE_PROPS = {
    tagName: "p",
    attributes: [{ prop: "class", value: "cart-product-card__product-price" }],
    textContent: `$ ${productPrice}`,
  };
  const $ProductPrice = CreateElement(PROD_PRICE_PROPS);

  const PRICE_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [
      { prop: "class", value: "cart-product-card__price-container" },
    ],
    children: [$ProductPrice],
  };
  const $ProductPriceContainer = CreateElement(PRICE_CONTAINER_PROPS);

  const CLEAR_CART_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [
      { prop: "class", value: "cart-product-card__clear-product-container" },
    ],
    children: [ClearCart(product)],
  };
  const $ClearCartContainer = CreateElement(CLEAR_CART_CONTAINER_PROPS);

  const CART_PRODUCT_PROPS = {
    tagName: "div",
    attributes: [{ prop: "class", value: "cart-product-card" }],
    children: [
      $ProductImage,
      $NameAndQuantityContainer,
      $ButtonsContainer,
      $ProductPriceContainer,
      $ClearCartContainer,
    ],
  };

  const $CartProductCard = CreateElement(CART_PRODUCT_PROPS);
  return $CartProductCard;
};
