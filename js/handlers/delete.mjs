import { postFeed } from "../api/feed/postFeed.mjs";
import { deletePost } from "../api/posts/deletePost.mjs";

export async function setDeletePostListener() {
  const deletePostBtns = document.querySelectorAll('[data-delete-post-id]');
  

  deletePostBtns.forEach(button => {
    button.addEventListener("click", async () => {
      const postId = button.dataset.deletePostId;
      await deletePost(postId)
      await postFeed();
    })

  })
  

}