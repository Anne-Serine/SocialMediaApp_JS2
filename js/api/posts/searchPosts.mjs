import { API_BASE, API_KEY, API_SEARCH } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

export async function searchPosts(value) {
  try {
    const response = await fetch(API_BASE + API_SEARCH + value, {
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json"
      },
    });
    if(response.ok) {
      return await response.json();
    } else {
      if (response.status === 403) throw new Error("403, Forbidden, invalid API key");
      if (response.status === 404) throw new Error("404, Not found");
      if (response.status === 500) throw new Error("500, Internal server error");
      // For any other server error
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
}
