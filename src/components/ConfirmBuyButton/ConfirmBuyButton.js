import { CreateElement } from "../../helpers/CreateElement";
import Swal from "sweetalert2";
import { Render } from "../../helpers/Render";

export const ConfirmBuyButton = () => {
  const PROPS = {
    tagName: "button",
    attributes: [{ prop: "id", value: "cartPage__confirmBuyButton" }],
    textContent: "Confirmar compra",
  };

  const $ConfirmBuyButton = CreateElement(PROPS);
  return $ConfirmBuyButton;
};

const confirmBuy = ({ target }) => {
  if (target.id !== "cartPage__confirmBuyButton") {
    return;
  }
  Swal.fire({
    title: "Compra confirmada!",
    text: "Gracias por elegirnos, que disfrute su pedido!",
    icon: "success",
    confirmButtonText: "Volver",
    color: "#fff",
    background: "#7e0a0a",
  });
  localStorage.removeItem("cart-food-patrick");
  Render();
};

document.addEventListener("click", confirmBuy);
