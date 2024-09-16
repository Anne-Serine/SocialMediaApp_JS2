import { API_BASE, API_POSTS,API_PARAMS, API_KEY, API_PROFILE_POSTS } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

/**
 * Fetches posts from the API endpoint.
 * @returns {Promise<Array<Object>|Error>} A Promise that resolves with an array of post objects if successful, or an Error object if unsuccessful.
 * @throws {Error} If the request fails due to a 404 (Not found) or 500 (Internal Server Error) status, or any other server error.
 * @example
 * ```js
 * await getPosts().then((posts) => {
 *   if(posts.data) {
 *     // Render posts
 *   } else {
 *     // Render anything else, e.g errors
 *   }
 * })
 * ```
 */
export async function getPosts(userName) {
  try {
    let postsURL = API_BASE + API_POSTS + API_PARAMS;

    if(userName) {
      postsURL = API_BASE + API_PROFILE_POSTS + `/${userName}/posts` + API_PARAMS;
    }
     const response = await fetch(postsURL, {
      method: "GET",
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
      if (response.status === 500) throw new Error("500, Internal server error");
      // For any other server error
      throw new Error(response.status);
    }
  } catch (error) {
      return error
  }
}
