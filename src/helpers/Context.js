import { apiServices } from "../services/api.services";

let products = [];

const setProducts = async () => {
  products =
    JSON.parse(localStorage.getItem("products-food-patrick")) ||
    (await apiServices.getProducts());
  localStorage.setItem("products-food-patrick", JSON.stringify(products));
  return products;
};

let timeOut;

export const Context = async (newData = null) => {
  clearTimeout(timeOut);
  let data = {
    userLogged: JSON.parse(localStorage.getItem("user-logged")) || null,
    userIsAdmin: JSON.parse(localStorage.getItem("user-is-admin")) || false,
    products: await setProducts(),
    cart: JSON.parse(localStorage.getItem("productsInCart")) || [],
    inputValue: localStorage.getItem("input-search-value")
      ? localStorage.getItem("input-search-value")
      : "",
  };

  if (newData != null && JSON.stringify(newData) !== JSON.stringify(data)) {
    data = newData;
  }

  return data;
};
