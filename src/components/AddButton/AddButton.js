import { Context } from "../../helpers/Context";
import { CreateElement } from "../../helpers/CreateElement";
import Swal from "sweetalert2";

const AddToCart = async ({ target }) => {
  if (target.id.slice(0, 24) !== "productCard__addButton__") {
    return;
  }
  const CONTEXT = await Context();
  const productId = target.id.slice(24);
  const PRODUCT = CONTEXT.products.find((product) => product.id === productId);
  const CART = CONTEXT.cart;

  let productIsInCart = false;
  let productToCart = {};

  if (CART.length >= 1) {
    for (let prod of CART) {
      if (prod.product.id === productId) {
        productToCart = { product: prod.product, quantity: prod.quantity++ };
        localStorage.setItem("cart-food-patrick", JSON.stringify(CART));
        productIsInCart = true;
      }
    }
  }

  if (!productIsInCart) {
    CART.push({ product: PRODUCT, quantity: 1 });
    localStorage.setItem("cart-food-patrick", JSON.stringify(CART));
  }
  Swal.fire({
    title: "Producto agregado!",
    text: `Tienes ${productToCart.quantity} unidades de este producto en el carrito`,
    icon: "success",
    confirmButtonText: "Seguir comprando",
    color: "#fff",
    background: "#7e0a0a",
  });
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
document.removeEventListener('unload', AddToCart);