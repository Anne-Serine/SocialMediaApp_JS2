import { postFeed } from "../api/feed/postFeed.mjs";

/**
 * Resets the tag filter by clearing the tag filter container and reloading the post feed.
 * @example
 * ```js
 * // HTML:
 * // <button id="resetTagFilter">Reset Filter</button>
 * // <div id="tagFilterContainer">...</div>
 * 
 * // JavaScript:
 * // Assume postFeed() function is defined elsewhere
 * 
 * // Reset the tag filter when the reset button is clicked
 * resetTagFilter();
 * 
 * // This will attach a click event listener to the button with id "resetTagFilter",
 * // When clicked, it will clear the contents of the element with id "tagFilterContainer"
 * // and reload the post feed.
 * ```
 */
export function resetTagFilter() {
  const resetBtn = document.querySelector("#resetTagFilter");

  if(resetBtn) {
    resetBtn.addEventListener("click", () => {
      const tagFilterContainer = document.querySelector("#tagFilterContainer");
      tagFilterContainer.innerHTML = "";
      postFeed();
    })
  }
}