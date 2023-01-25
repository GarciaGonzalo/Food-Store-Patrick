import { Render } from "./Render";

const PATH = document.location.pathname;

const ELEMENTS = {
  loginLogo: '#loginLogo',
  productCard: '.product-card__show-more',

}
const changePath = ({target}) => {
  if (target.className !== "button-link") {
    return;
  }
  if (target.className === 'product-card__show-more') {
    PATH = `/product/${target.id}` // ver como resolver pasarle el id del producto
  }
  Render()
};

export const ChangePath = () => {
  let app = document.querySelector("#app");
  app.addEventListener("click", changePath);
  document.removeEventListener("unload", changePath);
};
