import { registerUser } from "../api/auth/register.mjs";

export async function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
  
      registerUser(profile.name, profile.email, profile.password).then((d) => {
        if(d.error) {
          // TODO: Output d.error message in html
        } else {
          window.location.href = "/"
        }
      });
    })
  }
}