import { apiServices } from "../services/api.services";
import { Render } from "./Render";

let products = [];

const setProducts = async () => {
  products = await apiServices.getProducts();
  return products;
};

let timeOut; // Preparing timeout for debounce

const getValue = async (e) => {
  if (e.target.id != "searchBar") {
    return;
  }

  clearTimeout(timeOut);

  if (e.target.value == "") {
    localStorage.removeItem("input-search-value");
  } else {
    localStorage.setItem("input-search-value", e.target.value);
  }

  if (e.type === "click") {
    products = await setProducts();
    localStorage.setItem("products-food-patrick", JSON.stringify(products));
    e.target.setAttribute("placeholder", "Busca tu producto!")
  } 
  else if (e.type === "input") {
    timeOut = setTimeout(async () => {
      products = await setProducts();
      const filteredProducts = products.filter(
        (product) =>
          product.productName
            .toUpperCase()
            .includes(e.target.value.toUpperCase()) ||
          product.category.toUpperCase().includes(e.target.value.toUpperCase())
      );
      if (filteredProducts.length > 0) {
        localStorage.setItem(
          "products-food-patrick",
          JSON.stringify(filteredProducts)
        );
      }

      Render();
    }, 1250);
  }
};

export const FilterBySearch = async () => {
  let app = document.querySelector("#app");
  app.addEventListener("input", getValue);
  app.addEventListener("click", getValue);
  document.removeEventListener("unload", getValue);
};
