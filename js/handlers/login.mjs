import { loginUser } from "../api/auth/login.mjs";

export async function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      //send it to the API
      loginUser(profile.email, profile.password).then((d) => {
        if(d.error) {
          // TODO: Output d.error message in html
          console.log(d.error)
        } else {
          window.location.href = "/profile"
        }
      });
    })
  }
}