import { API_BASE, API_POSTS, API_KEY } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

export async function getPosts() {
  const response = await fetch(API_BASE + API_POSTS, {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
      "Content-Type": "application/json"
    },
  });
  return await response.json();
}