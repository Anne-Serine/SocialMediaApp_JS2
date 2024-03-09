import { loginUser } from "../api/auth/login.mjs";
import { load, remove } from "../storage/index.mjs";

export async function setLoginFormListener() {
  const form = document.querySelector("#loginForm");
  const registeredUser = load("registeredUser");

  if (registeredUser) {
    showStatusMessage("alert-success", "You are successfully registered! Please log in.", "#loginAlertMessage", true)
    remove("registeredUser");
  }

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
          window.location.href = "/feed"
        } else {
          showStatusMessage("alert-danger", user, "#loginAlertMessage")
        }
      });
    })
  }
}