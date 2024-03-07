import { postFeed } from "../api/feed/postFeed.mjs";
import { createPost } from "../api/posts/createPost.mjs";
import { showStatusMessage } from "./showStatusMessage.mjs";

export async function setCreatePostListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const formTarget = event.target;
      const formData = new FormData(formTarget);
      const data = Object.fromEntries(formData.entries());

      const tags = data.tags.trim()
  
      createPost(data.title, data.content, data.image, tags).then(async (postData) => {
        if (postData.data) {
          await postFeed()
          showStatusMessage("alert-success", "Your post was published!", "#createPostAlertMessage", true)
          const formInputs = form.querySelectorAll("input");
          formInputs.forEach((input) => {
            input.value = "";
          })
        } else {
          showStatusMessage("alert-danger", postData, "#createPostAlertMessage");
        }
      })
    })
  } 
}

