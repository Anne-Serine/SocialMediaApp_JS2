import { load } from "../storage/index.mjs";
import { postFeed } from "../api/feed/postFeed.mjs";

export async function profilePosts() {
  const userName = load("profile");

  await postFeed(userName.name);
}