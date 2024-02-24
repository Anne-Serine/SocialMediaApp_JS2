// import { generateTags } from "./postTemplate.mjs";


// const filterByTagsBtn = document.getElementsByClassName("filterByTagsBtn");
// const radioFilterTagsContainer = document.getElementById("filterByTagsContainer");

// radioFilterTagsContainer.innerHTML = "tesing"

// console.log("test")

export function makeTagsFilter(tagsArray) {
  const tagFilterContainer = document.querySelector("#tagFilterContainer");
  const tags = tagsArray;

  tags.forEach(value => {
    tagFilterContainer.innerHTML += `
    <li><label>
      <input type="radio" value="${value}" name="filter-tag"> ${value}
    </label></li>`
  });
}