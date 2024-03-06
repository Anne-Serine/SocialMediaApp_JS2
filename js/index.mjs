import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { load } from "./storage/index.mjs";
import { setCreatePostListener } from "./handlers/post.mjs";
import { postFeed } from "./api/feed/postFeed.mjs";
import { searchInput } from "./handlers/search.mjs";
import { resetTagFilter } from "./handlers/resetTagFilter.mjs";
import { logoutBtn } from "./api/auth/logout.mjs";


// import { createAPIKey } from "./api/constants.mjs";

const path = location.pathname;
const loggedIn = load("token");


if (path === "/index.html" || path === "/") {
  if(loggedIn) {
    window.location.href = "/feed";
  }
  await setLoginFormListener();
} else if (path === "/register/") {
  if(loggedIn) {
    window.location.href = "/feed";
  }
  await setRegisterFormListener();
} else {
  if(!loggedIn) {
      window.location.href = "/";
  }
}

// await setLoginFormListener();
// await setRegisterFormListener();



await setCreatePostListener();
// console.log(createAPIKey())

await postFeed();

searchInput();

resetTagFilter();

logoutBtn()