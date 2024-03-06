import { API_BASE, API_POSTS, API_KEY, API_PARAMS } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

/**
 * Fetches a single post from the server.
 * @param {string} id - The ID of the post to fetch.
 * @returns {Promise<Object|Error>} A Promise that resolves with the fetched post object if successful, or an Error object if unsuccessful.
 * @throws {Error} If the request fails due to a 404 (Not found) or 500 (Internal Server Error) status, or any other server error.
 * @example
 * ```js
 * // Get the post id from a button data attribute or URLSearchParams.
 * const postId = button.dataset.postId | URLSearchParams;
 * const post = await getSinglePost(postId);
 * if(post.data) {
 *  // Do something with the fetched post;
 * } else {
 *  // render e.g error message;
 * }
 * ```
 */
export async function getSinglePost(id) {
  try {
    const response = await fetch(API_BASE + API_POSTS + `/${id}` + API_PARAMS, {
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json"
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      if (response.status === 404) throw new Error("404, Not found");
      if (response.status === 500) throw new Error("500, internal server error");
      // For any other server error
      throw new Error(response.status);
    }
  } catch(error) {
      return error;
  }
}






