import { CartProductCard } from "../../components/CartProductCard/CartProductCard";
import { ClearCart } from "../../components/ClearCart/ClearCart";
import { CreateElement } from "../../helpers/CreateElement";
import { getProductPrice } from "../../helpers/GetProductPrice";

// Function for getting the cart price
const getCartPrice = (cart) => {
  let totalCartPrice = 0;
  for (let productInCart of cart) {
    let price = getProductPrice(productInCart.product);
    totalCartPrice += price * productInCart.quantity;
  }
  return totalCartPrice;
};

// Cart view
export const Cart = async (context) => {
  const { cart } = context;

  // Title
  const TITLE_PROPS = {
    tagName: "p",
    attributes: [{ prop: "id", value: "cartPage__title" }],
    textContent: "Carrito de compras",
  };
  const $Title = CreateElement(TITLE_PROPS);

  // Empty cart
  const EMPTY_CART_PROPS = {
    tagName: "p",
    attributes: [{ prop: "id", value: "emptyCart__title" }],
    textContent: "El carrito está vacío",
  };
  const $EmptyCart = CreateElement(EMPTY_CART_PROPS);

  const TITLE_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "cartPage__titleContainer" }],
    children: cart.length > 0 ? [$Title] : [$EmptyCart],
  };
  const $TitleContainer = CreateElement(TITLE_CONTAINER_PROPS);

  // Generate each product card in the cart
  const children = [];
  for (let productInCart of cart) {
    children.push(await CartProductCard(productInCart));
  }

  const CART_CARDS_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "cartPage__cardsContainer" }],
    children,
  };
  const $CartCardContainerProps = CreateElement(CART_CARDS_CONTAINER_PROPS);

  // Cart length and total price elements
  const CART_LENGHT_PROPS = {
    tagName: "p",
    attributes: [{ prop: "id", value: "cartPage__cartLength" }],
    textContent: `Cantidad de productos: ${cart.length}`,
  };
  const $CartLength = CreateElement(CART_LENGHT_PROPS);

  const totalCartPrice = getCartPrice(cart);
  const CART_PRICE_PROPS = {
    tagName: "p",
    attributes: [{ prop: "id", value: "cartPage__cartPrice" }],
    textContent: `Total de tu compra: $${totalCartPrice}`,
  };
  const $CartPrice = CreateElement(CART_PRICE_PROPS);

  const LENGTH_AND_PRICE_PROPS = {
    tagName: "div",
    attributes: [
      { prop: "id", value: "cartPage__cartLenghtAndPriceContainer" },
    ],
    children: [$CartLength, $CartPrice],
  };
  const $CartLengthAndPriceContainer = CreateElement(LENGTH_AND_PRICE_PROPS);

  const CLEAR_CART_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "cartPage__clearCartContainer" }],
    children: [ClearCart()],
  };
  const $ClearCartContainerProps = CreateElement(CLEAR_CART_CONTAINER_PROPS);

  const CART_INFO_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "cartPage__infoContainer" }],
    children: [$CartLengthAndPriceContainer, $ClearCartContainerProps],
  };
  const $CartInfoContainer = CreateElement(CART_INFO_CONTAINER_PROPS);

  // Button for going back to homepage and see products
  const GO_TO_PRODUCT_PROPS = {
    tagName: "a",
    attributes: [
      { prop: "id", value: "cartPage__goToProducts" },
      { prop: "href", value: "" },
    ],
    textContent: "Volver a ver los productos",
  };
  const $GoToProducts = CreateElement(GO_TO_PRODUCT_PROPS);

  const GO_TO_PRODUCTS_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "cartPage__goToProductsContainer" }],
    children: [$GoToProducts],
  };
  const $GoToProductsContainer = CreateElement(GO_TO_PRODUCTS_CONTAINER_PROPS);

  const CART_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "cartPage" }],
    children:
      cart.length > 0
        ? [
            $TitleContainer,
            $CartCardContainerProps,
            $CartInfoContainer,
            $GoToProductsContainer,
          ]
        : [$TitleContainer, $GoToProductsContainer],
  };
  const $Cart = CreateElement(CART_PROPS);

  return $Cart;
};
