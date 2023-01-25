import { HomePage } from "../views/HomePage/HomePage";
import { ChangePath } from "./ChangePath";
import { Context } from "./Context";
import { FilterBySearch } from "./Filter";
import { Routes } from "./Routes";
const app = document.getElementById("app");

let context = {};

const getContext = async () => {
  context = await Context();
};

export const Render = async () => {
  await getContext();
  const PATH = document.location.pathname;
  let template = "";
  const { Home, Cart, Checkout, Product, Login } = Routes;

  switch (PATH) {
    case Home:
      template = HomePage(context);
      break;
    case Login:
      template = Login(context);
      break;
    case Product:
      template = Product(context);
      break;
    case Cart:
      template = Cart(context);
      break;
    case Checkout:
      template = Checkout(context);
      break;
  }

  app.innerHTML = template;
  FilterBySearch();
  ChangePath();
};
