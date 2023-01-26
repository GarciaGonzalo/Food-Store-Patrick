import { HomePage } from "../views/HomePage/HomePage";
import { ProductPage } from "../views/ProductPage/ProductPage";
import { Context } from "./Context";
import { Routes } from "./Routes";

export const Render = async () => {
  const $APP = document.getElementById("app");
  const HASH = window.location.hash;
  const CONTEXT = await Context();

  $APP.innerHTML = "";
  const { Home, Cart, Checkout, Product, Login } = Routes;

  const productId = localStorage.getItem("selected-product-food-patrick");
  const productPage = `${Product}${productId}`;

  switch (HASH) {
    case Login:
      $APP.appendChild(Login(CONTEXT));
      break;
    case productPage:
      $APP.appendChild(await ProductPage(CONTEXT));
      break;
    case Cart:
      $APP.appendChild(Cart(CONTEXT));
      break;
    default:
      $APP.appendChild(await HomePage(CONTEXT));
      break;
  }
};


window.addEventListener('hashchange', Render)