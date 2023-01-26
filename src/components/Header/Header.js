import { Context } from "../../helpers/Context";
import { CreateElement } from "../../helpers/CreateElement";
import { Devices } from "../../helpers/Devices";
import { CartLogo } from "../CartLogo/CartLogo";
import { SearchBar } from "../SearchBar/SearchBar";

// Header component export

export const Header = async (context) => {
  const { inputValue } = context;

  const CART_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "cartContainer" }],
    children: [await CartLogo()],
  };
  const $CartContainer = CreateElement(CART_CONTAINER_PROPS);

  const LOGO_IMAGE_PROPS = {
    tagName: "img",
    attributes: [
      { prop: "id", value: "siteLogo" },
      { prop: "src", value: "https://i.imgur.com/KtczzTn.jpg" },
      { prop: "alt", value: "Site Logo" },
    ],
  };
  const LOGO_TITLE_PROPS = {
    tagName: "h1",
    textContent: "Tienda de Comidas Patrick",
  };

  let $LogoImage = CreateElement(LOGO_IMAGE_PROPS);
  let $LogoTitle = CreateElement(LOGO_TITLE_PROPS);

  const SITE_LOGO_CONTAINER_PROPS = {
    tagName: "div",
    attributes: [{ prop: "id", value: "siteLogoContainer" }],
    children: [$LogoImage, $LogoTitle],
  };
  const $SiteLogoContainer = CreateElement(SITE_LOGO_CONTAINER_PROPS);
  
  const HEADER_PROPS = {
    tagName: "header",
    attributes: [
      {
        prop: "id",
        value: "header",
      },
    ],
    children: [$CartContainer, $SiteLogoContainer, SearchBar(inputValue)],
  };

  const $Header = CreateElement(HEADER_PROPS);

  return $Header;
};
