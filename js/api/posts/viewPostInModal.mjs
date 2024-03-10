import { getSinglePost } from "./getSinglePost.mjs";
import { singlePostTemplate } from "./singlePostTemplate.mjs";
import { sharePostLink } from "../../handlers/share.mjs";

export async function viewSinglePostModal() {
  const singlePostModal = document.querySelector("#viewSinglePostModal");
  const viewPostBtns = document.querySelectorAll('[data-view-post-id]');
  const viewPostCloseBtn = singlePostModal.querySelector(".close-view-post-modal");
  const parameterString = window.location.search;
  const searchParameters = new URLSearchParams(parameterString);
  const id = searchParameters.get("postId")
  const path = location.pathname;

  if(id) {
    openSinglePostModal(id, singlePostModal);
  }
  viewPostBtns.forEach(button => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      const postId = button.dataset.viewPostId

      openSinglePostModal(postId, singlePostModal);
      searchParameters.set("postId", postId)
      window.history.replaceState(null, null, "?" + searchParameters.toString())
    })
  })
  viewPostCloseBtn.addEventListener("click", () => {
    singlePostModal.close();
    if(path === "/profile/" || path === "/profile/index.html") {
      window.history.replaceState(null, null, "/profile");
    } else {
      window.history.replaceState(null, null, "/feed");
    }
  })
  singlePostModal.addEventListener("click", (event) => {
    if (event.target === singlePostModal) {
      singlePostModal.close();
      if(path === "/profile/" || path === "/profile/index.html") {
        window.history.replaceState(null, null, "/profile");
      } else {
        window.history.replaceState(null, null, "/feed");
      }
    }
  });
}


async function openSinglePostModal(id, singlePostModal) {
  const post = await getSinglePost(id);
  const modalCardContainer = singlePostModal.querySelector(".modalCardContainer");

  modalCardContainer.innerHTML = singlePostTemplate(post.data);
  singlePostModal.showModal();
  sharePostLink(singlePostModal);
}