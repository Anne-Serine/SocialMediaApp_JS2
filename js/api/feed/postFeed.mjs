import { setDeletePostListener } from "../../handlers/deleteHandler.mjs";
import { modalEditPost } from "../../handlers/modalEditPost.mjs";
import { load } from "../../storage/index.mjs";
import { logoutBtn } from "../auth/logout.mjs";
import { makeTagsFilter } from "../posts/filterPosts.mjs";
import { getPosts } from "../posts/getPosts.mjs";
import { postTemplate } from "../posts/postTemplate.mjs";
import { viewSinglePostModal } from "../posts/viewPostInModal.mjs";

export async function postFeed() {
  const postFeed = document.querySelector("#postFeed");


  if (postFeed) {
    await getPosts().then((posts) => {

      postFeed.innerHTML = "";

      if(posts.data) {
        const storage = load("profile");
        const tagsArray = new Set();

        for (const post of posts.data) {
          postFeed.innerHTML += postTemplate(post, storage.name)

          for( const tag of post.tags) {
            if(tag) {
              tagsArray.add(tag);
            }
          }
        }
        makeTagsFilter(tagsArray);
        viewSinglePostModal();
        modalEditPost();
        setDeletePostListener();
      } else {
        postFeed.innerHTML = `<div class="alert alert-danger" role="alert">
        ${posts}
        </div>`
      }
    })
  }
}