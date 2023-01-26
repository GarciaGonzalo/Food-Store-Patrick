import { CreateElement } from "../../helpers/CreateElement";

export const BurgerMenu = () => {
  const $div1 = CreateElement({ tagName: "div" });
  const $div2 = CreateElement({ tagName: "div" });
  const $div3 = CreateElement({ tagName: "div" });
  const PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "burgerMenu" }],
    children: [$div1, $div2, $div3],
  };

  const $BurgerMenu = CreateElement(PROPS);

  return $BurgerMenu;
};
