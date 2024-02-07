import { API_BASE, API_AUTH, API_REGISTER } from "../constants.mjs";

export async function registerUser(name, email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_REGISTER, {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify({name, email, password})
  });

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    return {error: "Could not register the account."}
  }
}

