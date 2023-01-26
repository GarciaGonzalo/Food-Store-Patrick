import { CreateElement } from "../../helpers/CreateElement";

export const CloseButton = () => {
  const IMG_PROPS = {
    tagName: "img",
    attributes: [
      { prop: "class", value: "close-btn__image" },
      { prop: "src", value: "https://i.imgur.com/ZgCW9X7.png" },
      { prop: "alt", value: "Close Button Image" },
    ],
  };
  const $Img = CreateElement(IMG_PROPS);
;
  const PROPS = {
    tagName: "a",
    attributes: [{ prop: "class", value: "close-btn" }, {prop: 'href', value: ''}],
    children: [$Img],
  };

  const $CloseButton = CreateElement(PROPS);

  return $CloseButton;
};
