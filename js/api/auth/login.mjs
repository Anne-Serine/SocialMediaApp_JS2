import { API_BASE, API_AUTH, API_LOGIN } from "../constants.mjs";
import * as storage from "../../storage/index.mjs"

export async function loginUser(email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_LOGIN, {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify({email, password})
  });
  
  if (response.ok) {
    const userData = await response.json()
    const { accessToken, ...user} = await userData.data;
    storage.save("token", accessToken);
    storage.save("profile", user)
    return user;
  } else {
    return {error: "Wrong username or password!"}
  }
}