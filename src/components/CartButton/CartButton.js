import { Context } from "../../helpers/Context";
import { CreateElement } from "../../helpers/CreateElement";
import { Render } from "../../helpers/Render";

export const CartButton = (productId, operation, cart) => {
  const PROPS = {
    tagName: "button",
    attributes: [
      { prop: "id", value: productId },
      { prop: "class", value: `cart-product-card__${operation}-button` },
    ],
    textContent: operation === "add" ? "+" : "-",
  };

  const $CartButton = CreateElement(PROPS);
  return $CartButton;
};

const cartOperation = async ({ target }) => {
  if (
    target.className !== "cart-product-card__add-button" &&
    target.className !== "cart-product-card__substract-button"
  ) {
    return;
  }

  const CONTEXT = await Context();
  const { cart } = CONTEXT;

  for (let prod of cart) {
    if (prod.product.id === target.id) {
      if (target.className === "cart-product-card__add-button") {
        prod.quantity++;
        localStorage.setItem("cart-food-patrick", JSON.stringify(cart));
        Render();
      } else {
        prod.quantity--;

        if (prod.quantity === 0) {
          cart.splice(cart.indexOf(prod), cart.indexOf(prod) + 1);
        }
        localStorage.setItem("cart-food-patrick", JSON.stringify(cart));
        Render();
      }
    }
  }
};

document.addEventListener("click", cartOperation);
document.removeEventListener("unload", cartOperation);
