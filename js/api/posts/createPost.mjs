import { API_BASE, API_POSTS, API_KEY } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

export async function createPost(title, content, image, tags) {
  let object

  if(image) {
    object = {
      title: title, body: content, media: { url: image, alt: "" }, tags: tags.split(" ")
    }
  } else {
    object = {
      title: title, body: content, tags: tags.split(" ")
    }
  }

  const response = await fetch(API_BASE + API_POSTS, {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(object),
  });

  return await response.json();
}

