import { registerUser } from "../api/auth/register.mjs";

export async function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());


    //send it to the API
    registerUser(profile.name, profile.email, profile.password);
})
}