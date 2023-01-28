import { CreateElement } from "../../helpers/CreateElement";

export const Footer = () => {
  

  const LOGO_IMAGE_PROPS = {
    tagName: "img",
    attributes: [
      { prop: "id", value: "siteLogoFooter" },
      { prop: "src", value: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png" },
      { prop: "alt", value: "Site Logo" },
    ],
  };
  let $LogoImage = CreateElement(LOGO_IMAGE_PROPS);

  const DEVELOPED_BY_PROPS = {
    tagName: "p",
    attributes: [{ prop: "id", value: "developedByText" }],
    textContent: "Desarrollado por Patricio Toribio ©",
  };
  const $DevelopedBy = CreateElement(DEVELOPED_BY_PROPS);


  const FOOTER_PROPS = {
    tagName: "footer",
    attributes: [{ prop: "id", value: "footer" }],
    children: [$LogoImage, $DevelopedBy],
  };

  const $Footer = CreateElement(FOOTER_PROPS);
  return $Footer;
};
