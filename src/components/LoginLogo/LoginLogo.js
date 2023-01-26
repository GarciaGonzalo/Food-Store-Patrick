import { CreateElement } from "../../helpers/CreateElement";

export const LoginLogo = () => {
  const PROPS = {
    tagName: "img",
    attributes: [
      { prop: "id", value: "loginLogo" },
      { prop: "src", value: "https://i.imgur.com/6teTLSF.png" },
      {prop: 'alt', value: 'Login Logo'},
    ],
  };
  const $LoginLogo = CreateElement(PROPS);
  return $LoginLogo
};
