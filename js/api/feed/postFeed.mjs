import { setDeletePostListener } from "../../handlers/delete.mjs";
import { modalEditPost } from "../../handlers/modalEditPost.mjs";
import { makeTagsFilter } from "../posts/filterPosts.mjs";
import { getPosts } from "../posts/getPosts.mjs";
import { generateTags, postTemplate } from "../posts/postTemplate.mjs";
import { viewSinglePostModal } from "../posts/viewPostInModal.mjs";

export async function postFeed() {
  const postFeed = document.querySelector("#postFeed");

  if (postFeed) {
    await getPosts().then((posts) => {

      // console.log(posts)
      postFeed.innerHTML = "";

      const storage = localStorage.getItem("profile");
      const profileObj = JSON.parse(storage);
      let tagsArray = []

      for (const post of posts.data) {
        postFeed.innerHTML += postTemplate(post, profileObj.name)

        for( const tag of post.tags) {
          if(tag) {
            tagsArray.push(tag)
          }
        }
      }
      console.log(tagsArray)
      
      makeTagsFilter(tagsArray);
      viewSinglePostModal();
      modalEditPost();
      setDeletePostListener();
      generateTags()
    })
  }
}


