import { CreateElement } from "../../helpers/CreateElement";
import { apiServices } from "../../services/api.services";
import { Render } from "../../helpers/Render";

const setProducts = async () => {
  const PRODUCTS = await apiServices.getProducts();
  return PRODUCTS;
};

let timeOut; // Preparing timeout for debounce

// Filtering products function
const filterBySearch = async (e) => {
  if (e.target.id != "searchBar") {
    return;
  }

  clearTimeout(timeOut);
  if (e.target.value == "") {
    localStorage.removeItem("input-search-value-food-patrick");
  } else {
    localStorage.setItem("input-search-value-food-patrick", e.target.value);
  }

  if (e.type === "click") {
    if (e.target.value === "") {}
    const PRODUCTS = await setProducts();
    localStorage.setItem("products-food-patrick", JSON.stringify(PRODUCTS));
    e.target.setAttribute("placeholder", "Busca tu producto!")
  } 
  else if (e.type === "input") {
    timeOut = setTimeout(async () => {
      const PRODUCTS = await setProducts();
      const FILTERED_PRODUCTS = PRODUCTS.filter(
        (product) =>
          product.productName
            .toUpperCase()
            .includes(e.target.value.toUpperCase()) ||
          product.category.toUpperCase().includes(e.target.value.toUpperCase())
      );
      if (FILTERED_PRODUCTS.length > 0) {
        localStorage.setItem(
          "products-food-patrick",
          JSON.stringify(FILTERED_PRODUCTS)
        );
      }

      Render();
    }, 1250);
  }
};

export const SearchBar = (inputValue) => {
  const PROPS = {
    tagName: "input",
    attributes: [
      { prop: "id", value: "searchBar" },
      { prop: "type", value: "text" },
      { prop: "placeholder", value: "Busca tu producto!" },
      { prop: "value", value: inputValue },
    ],
  };
  
  const $SearchBar = CreateElement(PROPS);
  document.addEventListener("input", filterBySearch);
  document.addEventListener("click", filterBySearch);
  document.removeEventListener("unload", filterBySearch);

  return $SearchBar;
};
