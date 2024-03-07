import { API_BASE, API_FILTERING, API_KEY, API_PARAMS, API_POSTS } from "../constants.mjs";
import { load } from "../../storage/index.mjs";
import { postTemplate } from "./postTemplate.mjs";


export function makeTagsFilter(tagsArray) {
  const tagFilterContainer = document.querySelector("#tagFilterContainer");
  const tags = tagsArray;
  const filteredPostsContainer = document.querySelector("#postFeed");

  tags.forEach(tag => {
    tagFilterContainer.innerHTML += `
    <li><label>
      <input type="radio" value="${tag}" name="filter-tag"> ${tag}
    </label></li>`
    //console.log(tag)
  });

  const radioBtns = tagFilterContainer.querySelectorAll('input[name="filter-tag"]');
  
  // console.log(radioBtns)
  
  radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change", async (event) => {
      const tagValue = event.target.value;
      const postsByTag = await getPostByTag(tagValue);

      console.log(postsByTag)
      filteredPostsContainer.innerHTML = "";

      if(tagValue) {
        for (const post of postsByTag.data) {
          filteredPostsContainer.innerHTML += postTemplate(post)
        }
      }
    })
  })


}



// export function displayFilteredPosts(postsByTag) {
//   const filteredPostsContainer = document.querySelector("#filteredPosts");

//   filteredPostsContainer.innerHTML = "";
  

//   // if(postsByTag.length > 0) {
//   //   postsByTag.forEach(postByTag => {
//   //     filteredPostsContainer.innerText += "testing"
//   //     console.log(tagValue)
//   //   })

//   // }
 
// }


export async function getPostByTag(tagValue) {
  const response = await fetch(API_BASE + API_POSTS + API_PARAMS + API_FILTERING + `${tagValue}`, {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
      "Content-Type": "application/json"
    },
  });
  console.log(tagValue)
  return await response.json();
}


