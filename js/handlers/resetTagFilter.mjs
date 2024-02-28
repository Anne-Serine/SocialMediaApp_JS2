import { postFeed } from "../api/feed/postFeed.mjs";

export function resetTagFilter() {
  const resetBtn = document.querySelector("#resetTagFilter");

  resetBtn.addEventListener("click", () => {
    const tagFilterContainer = document.querySelector("#tagFilterContainer");
    tagFilterContainer.innerHTML = "";
    postFeed();
  })
}