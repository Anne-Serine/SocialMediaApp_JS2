import { registerUser } from "../api/auth/register.mjs";
import { save } from "../storage/index.mjs";
import { showStatusMessage } from "./showStatusMessage.mjs";

export async function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
  
      registerUser(profile.name, profile.email, profile.password).then((user) => {
        if(user.data) {
          save("registeredUser", true)
          window.location.href = "/";
        } else {
          showStatusMessage("alert-danger", user, "#registerAlertMessage");
        }
      });
    })
  }
}