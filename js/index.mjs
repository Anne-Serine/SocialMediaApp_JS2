import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { load } from "./storage/index.mjs";

const path = location.pathname;

console.log(path)

if (path === "/index.html" || path === "/") {
  await setLoginFormListener();
} else if (path === "/register/") {
  await setRegisterFormListener();
} else {
  const loggedIn = load("token");
  if(!loggedIn) {
      window.location.href = "/";
  }
}
