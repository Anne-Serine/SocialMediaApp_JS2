import { modalEditPost } from "../../handlers/modalEditPost.mjs";
import { getPosts } from "../posts/getPosts.mjs";
import { postTamplate } from "../posts/postTemplate.mjs";

export async function postFeed() {
  const postFeed = document.querySelector("#postFeed");

  if (postFeed) {
    await getPosts().then((posts) => {

      //console.log(posts)
      
      for (const post of posts.data) {
        postFeed.innerHTML += postTamplate(post)
      }
      modalEditPost();
    })
  }
}


