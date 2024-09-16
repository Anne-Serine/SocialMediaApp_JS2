import { API_BASE, API_POSTS, API_KEY } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

/**
 * Deletes a post with the given ID from the server.
 * @param {string} id - The ID of the post to delete.
 * @returns {Promise<Response|Error>} A promise that resolves to the response from the server if successful, or an error if unsuccessful.
 * @example
 * ```js
 *   const postId = "123"; // ID of the post to delete
 *   const response = await deletePost(postId);
 *   if(response.ok) {
 *     // Show a success message if post is deleted successfully;
 *   } else {
 *     // Show an error message
 *   }
 * ```
 */
export async function deletePost(id) {
  try {
    const response = await fetch(API_BASE + API_POSTS + `/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json"
      },
    })
    if(response.ok) {
      return response;
    } else {
      if (response.status === 401) throw new Error("401, Unauthorized");
      if (response.status === 403) throw new Error("403, Forbidden");
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
}
