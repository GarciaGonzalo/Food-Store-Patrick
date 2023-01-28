import { Context } from "../../helpers/Context";
import { CreateElement } from "../../helpers/CreateElement";
import { Render } from "../../helpers/Render";

export const ClearCart = (product = null) => {
  const IMG_PROPS = {
    tagName: "img",
    attributes: [
      {
        prop: "id",
        value:
          product !== null
            ? `cartProductCard__clearProduct${product.id}`
            : "cartProductCard__clearCart",
      },
      {
        prop: "class",
        value:
          product === null
            ? "cart-product-card__clear-cart"
            : "cart-product-card__clear-product",
      },
      { prop: "src", value: "https://i.imgur.com/V6qksCl.png" },
      { prop: "alt", value: "Clear cart or product image" },
    ],
  };

  const $Image = CreateElement(IMG_PROPS);
  return $Image;
};

const clearCartFunction = async ({ target }) => {
  const CONTEXT = await Context();
  const { cart } = CONTEXT;
  const productId = target.id.slice(29);
  if (
    target.className !== "cart-product-card__clear-cart" &&
    target.className !== "cart-product-card__clear-product"
  ) {
    return;
  }

  if (target.className === "cart-product-card__clear-cart") {
    cart.splice(0, cart.length);
    localStorage.setItem("cart-food-patrick", JSON.stringify(cart));
    Render();
  } else {
    for (let prod of cart) {
      if (prod.product.id === productId) {
        cart.splice(cart.indexOf(prod), cart.indexOf(prod) + 1);
        localStorage.setItem("cart-food-patrick", JSON.stringify(cart));
        Render();
      }
    }
  }
};

document.addEventListener("click", clearCartFunction);
document.removeEventListener("unload", clearCartFunction);
