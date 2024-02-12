import { getPosts } from "../api/posts/getPosts.mjs";
import { getSinglePost } from "../api/posts/getSinglePost.mjs";
import { postTamplate } from "../api/posts/postTemplate.mjs";
import { editPost } from "../api/posts/editPost.mjs";
import { postFeed } from "../api/feed/postFeed.mjs";

export function modalEditPost() {
  const modal = document.querySelector("#modal");
  const editPostBtns = document.querySelectorAll('[data-post-id]');
  const closeModal = document.querySelector(".close-modal");
  const editPostForm = document.querySelector("#editPost");

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
        if(input.id === "postId") {
          input.value = postId;
        }
      })
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
    editPost(data.title, data.content, data.image, data.postId).then((postData) => {
      console.log(postData)
      // window.location.href = "/feed"
    })
    modal.close(); 
    await postFeed();
  })
  
  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();
  
    if (event.clientY < rect.top || event.clientY > rect.bottom || event.clientX <  rect.left || event.clientX > rect.right) {
      modal.close();
    }
  
  });
}
