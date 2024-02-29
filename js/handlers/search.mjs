import { searchPosts } from "../api/posts/searchPosts.mjs";
  
export function searchInput() {
  const searchInput = document.querySelector("#searchInput");
  const searchResults = document.querySelector("#searchResults");
  
  if (searchInput || searchResults) {

    searchInput.addEventListener("keyup", async (e) => {
      const value = e.target.value
      searchResults.innerHTML = ""
      if(value.length > 0) {
        const posts = await searchPosts(value)
  
        if(posts.data.length > 0) {
          for(let i = 0; i < posts.data.length; i++) {
            searchResults.innerHTML += `<li class="list-group-item text-wrap bg-light">
            <a href="/feed/?postId=${posts.data[i].id}" class="text-dark link-underline link-underline-opacity-0"> ${posts.data[i].title}"</a>
            </li>`
          }
          // console.log(posts)
        }else {
            searchResults.innerHTML = `<li class="list-group-item text-wrap bg-light">
            No results
            </li>`;
        }
      }
    })
  }

}

