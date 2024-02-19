import { setDeletePostListener } from "../../handlers/delete.mjs";
import { modalEditPost } from "../../handlers/modalEditPost.mjs";
import { sharePostLink } from "../../handlers/share.mjs";
import { getPosts } from "../posts/getPosts.mjs";
import { postTamplate } from "../posts/postTemplate.mjs";
import { viewSinglePostModal } from "../posts/viewPostInModal.mjs";

export async function postFeed() {
  const postFeed = document.querySelector("#postFeed");

  if (postFeed) {
    await getPosts().then((posts) => {

      //console.log(posts)
      postFeed.innerHTML = "";

      const storage = localStorage.getItem("profile");
      const profileObj = JSON.parse(storage);

      for (const post of posts.data) {
        postFeed.innerHTML += postTamplate(post, profileObj.name)
      }
      viewSinglePostModal();
      modalEditPost();
      setDeletePostListener();
    })
  }
}


