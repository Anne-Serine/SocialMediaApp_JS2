import { getSinglePost } from "../api/posts/getSinglePost.mjs";
import { editPost } from "../api/posts/editPost.mjs";
import { postFeed } from "../api/feed/postFeed.mjs";
import { showStatusMessage } from "./showStatusMessage.mjs";

export function modalEditPost() {
  const modal = document.querySelector("#modal");
  const editPostBtns = document.querySelectorAll('[data-post-id]');
  const closeModal = document.querySelector(".close-modal");
  const editPostForm = document.querySelector("#editPost");

  editPostBtns.forEach(button => {
    button.addEventListener("click", async () => {
      const postId = button.dataset.postId

      const post = await getSinglePost(postId);

      if(post.data) {
        const form = document.querySelectorAll("#editPost *");
        form.forEach(input => {
          if(input.id === "editTitle") {
            input.value = post.data.title;
          }
          if(input.id === "editContent") {
            input.value = post.data.body;
          }
          if(input.id === "editImageUrl" && post.data.media) {
            input.value = post.data.media.url;
          }
          if(input.id === "editTags") {
            input.value = post.data.tags.toString().replaceAll(",", " ");
          }
          if(input.id === "postId") {
            input.value = postId;
          }
        })
      } else {
        modal.innerHTML += `<div class="alert alert-danger m-3" role="alert">${post}</div>`
      }
      modal.showModal();
    })
  })
  closeModal.addEventListener("click", () => {
    modal.close();
  })

  editPostForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // console.log(data)
    const post = await editPost(data.title, data.content, data.image, data.tags, data.postId)
    if(post.data) {
      await postFeed();
      modal.close(); 
    } else {
      showStatusMessage("alert-danger", post, "#editPostAlertContainer")
    }
  })
  
  modal.addEventListener("click", (event) => {
  
    if (event.target === modal) {
      modal.close();
    }
  });
}
