import { API_BASE, API_KEY, API_SEARCH } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

export async function searchPosts(value) {
  const response = await fetch(API_BASE + API_SEARCH + value, {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
      "Content-Type": "application/json"
    },
  });
  return await response.json();
}


