import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { load } from "./storage/index.mjs";
import { setCreatePostListener } from "./handlers/post.mjs";
// import { createAPIKey } from "./api/constants.mjs";

const path = location.pathname;


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

await setCreatePostListener();
// console.log(createAPIKey())

