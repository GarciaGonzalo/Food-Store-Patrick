import { Context } from "../../helpers/Context";
import { Devices } from "../../helpers/Devices";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { CartLogo } from "../CartLogo/CartLogo";
import { LoginLogo } from "../LoginLogo/LoginLogo";
import { SearchBar } from "../SearchBar/SearchBar";

const MobileHeader = (context) => {
  const { userLogged, userIsAdmin, products, cart, inputValue } = context;

  let template = `<header><div id="menuAndCartContainer">`;
  template += BurgerMenu();
  template += CartLogo();
  template += `</div><div id="logoContainer">
            <img src="https://i.imgur.com/KtczzTn.jpg" alt="site logo" />
            <h1>Tienda de Comidas Patrick</h1>
        </div>`;
  template += SearchBar(inputValue);
  template += `</header>`;

  return template;
};

const TabletHeader = (context) => {
  const { userLogged, userIsAdmin, products, cart, inputValue } = context;

  let template = `<header>`;
  if (window.innerWidth < 768) {
    template += BurgerMenu();
  }
  template += `<div id="logoContainer">
              <img src="https://i.imgur.com/KtczzTn.jpg" alt="site logo" />
              <h1>Tienda de Comidas Patrick</h1>
          </div>
          <div id="searchAndLoginContainer">
          `;
  template += SearchBar(inputValue);
  template += LoginLogo();
  template += `</div></header>`;

  return template;
};

const DesktopHeader = (context) => {
  const { userLogged, userIsAdmin, products, cart, inputValue } = context;

  let template = `<header>`;
  if (window.innerWidth < 768) {
    template += BurgerMenu();
  }
  template += `<div id="logoContainer">
              <img src="https://i.imgur.com/KtczzTn.jpg" alt="site logo" />
              <h1>Tienda de Comidas Patrick</h1>
          </div>
          <div id="searchAndLoginContainer">
          `;
  template += SearchBar(inputValue);
  template += LoginLogo();
  template += `</div></header>`;

  return template;
};

export const Header = (context) => {
  const { userLogged, userIsAdmin, products, cart, inputValue } = context;
  const WH = window.innerWidth;
  let template;

  if (WH < Devices.medium) {
    template = MobileHeader(context);
  } else if (WH >= Devices.medium && WH < Devices.large) {
    template = TabletHeader(context);
  } else {
    template = DesktopHeader(context);
  }

  return template;
};
