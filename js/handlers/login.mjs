import { loginUser } from "../api/auth/login.mjs";
import { load } from "../storage/index.mjs";

export async function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      //send it to the API
      loginUser(profile.email, profile.password).then((user) => {
        const loggedIn = load("token");
        if(loggedIn) {
          window.location.href = "/profile"
        } else {
          const loginErrorMessageContainer = document.querySelector("#loginErrorMessage");

          loginErrorMessageContainer.classList.remove("d-none");
          loginErrorMessageContainer.innerHTML = user;
        }
      });
    })
  }
}