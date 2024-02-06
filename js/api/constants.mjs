// import { load } from "../storage/index.mjs";
export const API_KEY = "91c1ae40-2a5d-401f-9c2e-27abbaada9eb"; 
export const API_BASE = "https://v2.api.noroff.dev";
export const API_AUTH = "/auth";
export const API_REGISTER = "/register";
export const API_LOGIN ="/login";

export const API_KEY_URL = "/create-api-key";


// export async function createAPIKey() {
//   const response = await fetch(API_BASE + API_AUTH + API_KEY_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type" : "application/json",
//       Authorization: `Bearer ${load("token")}`,
//     },
//     body: JSON.stringify({
//       name: "Test API key",
//     })
//   });

//   if (response.ok) {
//     return await response.json();
//   }

//   console.error(await response.json());
//   throw new Error("Could not register for an API key");
// }