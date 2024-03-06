import { postFeed } from "../api/feed/postFeed.mjs";
import { deletePost } from "../api/posts/deletePost.mjs";

/**
 * Sets up event listeners for delete post buttons.
 * When a delete post button is clicked, it prompts for confirmation
 * and deletes the corresponding post if confirmed.
 *
 * @example
 * ```js
 * // HTML:
 * // <button data-delete-post-id="123">Delete Post</button>
 * 
 * // JavaScript:
 * setDeletePostListener();
 * 
 * // Result:
 * // When the "Delete Post" button with data-delete-post-id="123" is clicked,
 * // it triggers the deletePost function for post with ID 123.
 * // If the deletion is successful, it shows a success message;
 * // otherwise, it shows an error message and updates the post feed.
 * ```
 */
export function setDeletePostListener() {
  const deletePostBtns = document.querySelectorAll('[data-delete-post-id]');
  
  deletePostBtns.forEach(button => {
    button.addEventListener("click", async () => {
      if(confirmDelete()) {
        const postId = button.dataset.deletePostId;
        const deletePostResponse = await deletePost(postId)

        if(deletePostResponse.ok) {
          const message = "The post was successfully deleted."
          showStatusMessage("alert-success", message)
        } else {
          showStatusMessage("alert-danger", deletePostResponse + " - Could not delete post")
        }
        await postFeed();
      }
    })
  })
}


/**
 * Displays a confirmation dialog asking the user if they want to delete a post.
 * @returns {boolean} Returns true if the user confirms deletion, otherwise false.
 * @example
 * ```js
 * if(confirmDelete()) {
 *  // Delete the post and display a success/error message
 * }
 * ```
 */
function confirmDelete() {
  const text = "Are you sure you want to delete this post?";

  if(confirm(text) === true) {
    return true
  } else {
    return false
  }
}


/**
 * Displays a status message on the webpage.
 * @param {string} alertType - The type of alert message to display. It can be "alert-success" or any other custom alert type.
 * @example
 * ```js
 * // Display a success message
 * showStatusMessage("alert-success");
 *
 * // Display an error message
 * showStatusMessage("alert-danger");
 * ```
 */
function showStatusMessage(alertType, message) {
  const statusMessage = document.querySelector("#statusMessage");

  statusMessage.classList.add(alertType);
  statusMessage.classList.remove("d-none");
  statusMessage.innerHTML = message;
  setTimeout(() => {
    statusMessage.classList.add("d-none");
  }, 4000)
}
