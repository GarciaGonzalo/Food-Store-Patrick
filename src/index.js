import "./style.scss";
import { apiServices } from "./services/api.services.js";

let users = [];

const showUsers = async () => {
  users = await apiServices.getUsers();
  console.log(users);
};

document.addEventListener("load", () => {
    showUsers()
});

document.removeEventListener("unload", showUsers());
