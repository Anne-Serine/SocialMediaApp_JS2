import { API_BASE, API_POSTS, API_KEY } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

export async function createPost(title, content, image, tags) {
  let object

  if(image) {
    object = {
      title: title, body: content, media: { url: image, alt: "" }, tags: tags.replaceAll(",", " ").split(" ")
    }
  } else {
    object = {
      title: title, body: content, tags: tags.replaceAll(",", " ").split(" ")
    }
  }

  try {
    const response = await fetch(API_BASE + API_POSTS, {
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(object),
    });
    console.log(response)
    if(response.ok) {
      return await response.json();
    } else {
      if (response.status === 403) throw new Error("403, Forbidden, Was not able to create post");
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
}

