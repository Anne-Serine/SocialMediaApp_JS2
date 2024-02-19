import { getSinglePost } from "./getSinglePost.mjs";
import { postTamplate } from "./postTemplate.mjs";
import { singlePostTamplate } from "./singlePostTemplate.mjs";
import { sharePostLink } from "../../handlers/share.mjs";

export async function viewSinglePostModal() {
  const singlePostModal = document.querySelector("#viewSinglePostModal");
  const viewPostBtns = document.querySelectorAll('[data-view-post-id]');
  const viewPostCloseBtn = singlePostModal.querySelector(".close-view-post-modal");

  const parameterString = window.location.search;
  const searchParameters = new URLSearchParams(parameterString);
  
  const id = searchParameters.get("postId")

  if(id) {
    openSinglePostModal(id, singlePostModal);
  }
  viewPostBtns.forEach(button => {
    button.addEventListener("click", async () => {

      const postId = button.dataset.viewPostId

      openSinglePostModal(postId, singlePostModal);
      

      window.history.replaceState(null, null,"?postId=" + postId)
    })
  })

  viewPostCloseBtn.addEventListener("click", () => {
    singlePostModal.close();
  })
  singlePostModal.addEventListener("click", (event) => {
  
    if (event.target === singlePostModal) {
      singlePostModal.close();
    }
  
  });
  
}



async function openSinglePostModal(id, singlePostModal) {
  const post = await getSinglePost(id);

      const modalCardContainer = singlePostModal.querySelector(".modalCardContainer");

      modalCardContainer.innerHTML = singlePostTamplate(post.data);
      
      singlePostModal.showModal();

      sharePostLink(singlePostModal);
}