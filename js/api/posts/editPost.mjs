import { API_BASE, API_POSTS, API_KEY } from "../constants.mjs";
import { load } from "../../storage/index.mjs";


export async function editPost(title, content, image, id) {
  let object

  if(image) {
    object = {
      title: title, body: content, media: { url: image, alt: "" }
    }
  } else {
    object = {
      title: title, body: content
    }
  }
  
  const response = await fetch(API_BASE + API_POSTS + `/${id}`, {
    method: "PUT",
    body: JSON.stringify(object),
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
      "Content-Type": "application/json"
    },
  });
  
  return await response.json();
}
