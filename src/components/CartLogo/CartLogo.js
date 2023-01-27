import { Context } from "../../helpers/Context";
import { CreateElement } from "../../helpers/CreateElement";

const generateChildren = (cartLength, goToCart, quantity) => {
  let children = [];
  if (cartLength > 0) {
    children.push(quantity);
    console.log(children);
  }
  children.push(goToCart);

  return children;
};

export const CartLogo = async () => {
  const CONTEXT = await Context();
  const { cart } = CONTEXT;

  const IMG_PROPS = {
    tagName: "img",
    attributes: [
      { prop: "id", value: "cartImg" },
      { prop: "src", value: "https://i.imgur.com/1rYaa2v.jpg" },
      { prop: "alt", value: "Cart logo" },
    ],
 
  };
  const $Img = CreateElement(IMG_PROPS);

  const GO_TO_CART_PROPS = {
    tagName: "a",
    attributes: [
      { prop: "id", value: "goToCart" },
      { prop: "href", value: "#/cart" },
    ],
    children: [$Img],
  };
  const $GoToCart = CreateElement(GO_TO_CART_PROPS);

  
  const QUANTITY_PROPS = {
    tagName: "p",
    attributes: [{ prop: "id", value: "cartQuantity" }],
    textContent: cart.length,
  };
  const $Quantity = CreateElement(QUANTITY_PROPS);

  const CART_LOGO_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "cartLogo" }],
    children: generateChildren(cart.length, $GoToCart, $Quantity),
  };

  const $CartLogo = CreateElement(CART_LOGO_PROPS);
  console.log($Quantity);
  return $CartLogo;
};
