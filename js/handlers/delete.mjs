import { postFeed } from "../api/feed/postFeed.mjs";
import { deletePost } from "../api/posts/deletePost.mjs";

export async function setDeletePostListener() {
  const deletePostBtns = document.querySelectorAll('[data-delete-post-id]');
  

  deletePostBtns.forEach(button => {
    button.addEventListener("click", async () => {
      const postId = button.dataset.deletePostId;
      const deletePostResponse = await deletePost(postId)
      await postFeed();

      console.log(deletePostResponse)

      const statusMessage = document.querySelector("#statusMessage");
      if(deletePostResponse.ok) {
        statusMessage.innerHTML = "The post was successfully deleted";
      } else {
        statusMessage.innerHTML = "Something went wrong, try again";
      }
    })
  })
}