import { Context } from "../../helpers/Context";
import { CreateElement } from "../../helpers/CreateElement";

const getContext = async () => {
  const context = await Context();
  return context;
};

const AddToCart = async ({ target }) => {
  if (target.id.slice(0, 24) !== "productCard__addButton__") {
    return;
  }
  const CONTEXT = await getContext();
  const productId = target.id.slice(24);
  const PRODUCT = CONTEXT.products.find((product) => product.id === productId);
  const CART = CONTEXT.cart;
  console.log(CART);
  console.log("target: ", target), console.log("context: ", CONTEXT);

  let productIsInCart = false;
  let productToCart = {};

  if (CART.length >= 1) {
    for (let prod of CART) {
      console.log("prod ", prod);
      if (prod.product.id === productId) {
        productToCart = { product: prod.product, quantity: prod.quantity++ };
        console.log('productToCart con el spread: ', productToCart)
        localStorage.setItem("cart-food-patrick", JSON.stringify(CART));
        productIsInCart = true;
      }
    }
  }

  if (!productIsInCart) {
    CART.push({ product: PRODUCT, quantity: 1 });
    localStorage.setItem("cart-food-patrick", JSON.stringify(CART));
  }
};

export const AddButton = (product) => {
  const ADD_BUTTON_PROPS = {
    tagName: "button",
    attributes: [
      { prop: "id", value: `productCard__addButton__${product.id}` },
    ],
    textContent: "Agregar al carrito",
  };

  const $AddButton = CreateElement(ADD_BUTTON_PROPS);

  return $AddButton;
};

document.addEventListener("click", AddToCart);
