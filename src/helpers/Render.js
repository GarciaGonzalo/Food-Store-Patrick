import { HomePage } from "../views/HomePage/HomePage";
import { ProductPage } from "../views/ProductPage/ProductPage";
import { Cart } from "../views/Cart/Cart";
import { Context } from "./Context";
import { Routes } from "./Routes";


export const Render = async () => {
  const $APP = document.getElementById("app");
  const HASH = window.location.hash;
  const CONTEXT = await Context();

  $APP.innerHTML = "";
  const { CartPage, Product } = Routes;

  const productId = localStorage.getItem("selected-product-food-patrick");
  const productPage = `${Product}${productId}`;

  switch (HASH) {
    case productPage:
      $APP.appendChild(await ProductPage(CONTEXT));
      break;
    case CartPage:
      $APP.appendChild(await Cart(CONTEXT));
      break;
    default:
      $APP.appendChild(await HomePage(CONTEXT));
      break;
  }
};

window.addEventListener("hashchange", Render);
window.removeEventListener('unload', Render);