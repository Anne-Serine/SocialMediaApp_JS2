import { API_BASE, API_POSTS, API_KEY } from "../constants.mjs";
import { load } from "../../storage/index.mjs";


export async function editPost(title, content, image, tags, id) {
  let object;

  if(image) {
    object = {
      title: title, body: content, media: { url: image, alt: "" }, tags: tags.replaceAll(",", " ").split(" ")
    };
  } else {
    object = {
      title: title, body: content, tags: tags.replaceAll(",", " ").split(" ")
    };
  }
  try {
    const response = await fetch(API_BASE + API_POSTS + `/${id}`, {
      method: "PUT",
      body: JSON.stringify(object),
      headers: {
        Authorization: `Bearer ${load("tokenl")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json"
      },
    });
    console.log(response)
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.status + " Was not able to edit post.");
    }
  } catch (error) {
    return error;
  }
}
