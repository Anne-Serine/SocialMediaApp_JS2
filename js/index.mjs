import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { load } from "./storage/index.mjs";
import { setCreatePostListener } from "./handlers/post.mjs";
import { postFeed } from "./api/feed/postFeed.mjs";
import { searchInput } from "./handlers/search.mjs";
import { resetTagFilter } from "./handlers/resetTagFilter.mjs";
import { logoutBtn } from "./api/auth/logout.mjs";
import { profilePosts } from "./handlers/profilePosts.mjs";


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

if (path === "/profile/" || path === "/profile/index.html") {
  await profilePosts()
} else {
  await setCreatePostListener();
  await postFeed();
  resetTagFilter();
}

searchInput();
logoutBtn()