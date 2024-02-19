import { API_BASE, API_POSTS, API_KEY, API_PARAMS } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

export async function getSinglePost(id) {
  const response = await fetch(API_BASE + API_POSTS + `/${id}` + API_PARAMS, {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
      "Content-Type": "application/json"
    },
  });
  return await response.json();
}





