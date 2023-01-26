import { Context } from "../../helpers/Context";
import { CreateElement } from "../../helpers/CreateElement";

const getContext = async () => {
  const context = await Context();
  return context;
};

const generateChildren = (cartLength, img, quantity) => {
  let children = [];
  if (cartLength > 0) {
    children.push(quantity);
    console.log(children);
  }
  children.push(img);

  return children;
};

export const CartLogo = async () => {
  const CONTEXT = await getContext();
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

  const QUANTITY_PROPS = {
    tagName: "p",
    attributes: [{ prop: "id", value: "cartQuantity" }],
    textContent: cart.length,
  };
  const $Quantity = CreateElement(QUANTITY_PROPS);

  const CART_LOGO_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "cartLogo" }],
    children: generateChildren(cart.length, $Img, $Quantity),
  };

  const $CartLogo = CreateElement(CART_LOGO_PROPS);
  console.log($Quantity);
  return $CartLogo;
};
