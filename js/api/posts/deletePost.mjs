import { API_BASE, API_POSTS, API_KEY } from "../constants.mjs";
import { load } from "../../storage/index.mjs";


export async function deletePost(id) {
  
  const response = await fetch(API_BASE + API_POSTS + `/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
      "Content-Type": "application/json"
    },
  })
  // console.log(response)
  return response;
}