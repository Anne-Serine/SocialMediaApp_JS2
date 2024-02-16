import { getSinglePost } from "./getSinglePost.mjs";
import { postTamplate } from "./postTemplate.mjs";
import { singlePostTamplate } from "./singlePostTemplate.mjs";

export function viewSinglePostModal() {
  const singlePostModal = document.querySelector("#viewSinglePostModal");
  const viewPostBtns = document.querySelectorAll('[data-view-post-id]');
  const viewPostCloseBtn = singlePostModal.querySelector(".close-view-post-modal");

  viewPostBtns.forEach(button => {
    button.addEventListener("click", async () => {
      const postId = button.dataset.viewPostId

      const post = await getSinglePost(postId);

      const modalCardContainer = singlePostModal.querySelector(".modalCardContainer");

      modalCardContainer.innerHTML = singlePostTamplate(post.data);
      
      singlePostModal.showModal();
    })
  })
  viewPostCloseBtn.addEventListener("click", () => {
    singlePostModal.close();
  })
  singlePostModal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();
  
    if (event.clientY < rect.top || event.clientY > rect.bottom || event.clientX <  rect.left || event.clientX > rect.right) {
      singlePostModal.close();
    }
  
  });

}
