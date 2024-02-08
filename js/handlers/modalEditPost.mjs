import { getPosts } from "../api/posts/getPosts.mjs";
import { getSinglePost } from "../api/posts/getSinglePost.mjs";
import { postTamplate } from "../api/posts/postTemplate.mjs";

export function modalEditPost() {
  const modal = document.querySelector("#modal");
  const editPostBtns = document.querySelectorAll('[data-post-id]');

  editPostBtns.forEach(button => {
    button.addEventListener("click", async () => {
      const postId = button.dataset.postId

      const post = await getSinglePost(postId);

      const form = document.querySelectorAll("#editPost *");
      form.forEach(input => {
        if(input.id === "editTitle") {
          input.value = post.data.title;
        }
        if(input.id === "editContent") {
          input.value = post.data.body;
        }
        if(input.id === "editImageUrl") {
          input.value = post.data.media.url;
        }
      })
      modal.showModal();
    })
  })
}
