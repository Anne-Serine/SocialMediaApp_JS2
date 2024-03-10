import { API_BASE, API_FILTERING, API_KEY, API_PARAMS, API_POSTS } from "../constants.mjs";
import { load } from "../../storage/index.mjs";
import { postTemplate } from "./postTemplate.mjs";
import { showStatusMessage } from "../../handlers/showStatusMessage.mjs";
import { viewSinglePostModal } from "./viewPostInModal.mjs";
import { modalEditPost } from "../../handlers/modalEditPost.mjs";
import { setDeletePostListener } from "../../handlers/deleteHandler.mjs";


export async function getPostByTag(tagValue) {
  try {
    const response = await fetch(API_BASE + API_POSTS + API_PARAMS + API_FILTERING + `${tagValue}`, {
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json"
      },
    });
    if(response.ok) {
      return await response.json();
    } else {
      if (response.status === 403) throw new Error("403, Forbidden, invalid API key");
      if (response.status === 404) throw new Error("404, Not found");
      if (response.status === 500) throw new Error("500, Internal server error");
      // For any other server error
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
}


export function makeTagsFilter(tagsArray) {
  const tagFilterContainer = document.querySelector("#tagFilterContainer");
  const tags = tagsArray;
  const filteredPostsContainer = document.querySelector("#postFeed");

  if (tags.size > 0) {
    tags.forEach(tag => {
      tagFilterContainer.innerHTML += `
      <li><label>
        <input type="radio" value="${tag}" name="filter-tag"> ${tag}
      </label></li>`
    });
    const radioBtns = tagFilterContainer.querySelectorAll('input[name="filter-tag"]');
    
    radioBtns.forEach(radioBtn => {
      radioBtn.addEventListener("change", async (event) => {
        const tagValue = event.target.value;
        const postsByTag = await getPostByTag(tagValue);
  
        filteredPostsContainer.innerHTML = "";
  
        if(postsByTag.data) {
          const storage = load("profile");
          for (const post of postsByTag.data) {
            filteredPostsContainer.innerHTML += postTemplate(post, storage.name)
          }
          viewSinglePostModal();
          modalEditPost();
          setDeletePostListener();
        } else {
          showStatusMessage("alert-danger", postsByTag, "#filterTagsAlertMessage");
        }
      })
    })
  } else {
    tagFilterContainer.innerHTML = `
      <li>No tags found...</li>`
  }
}