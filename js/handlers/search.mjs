import { searchPosts } from "../api/posts/searchPosts.mjs";
  
export function searchInput() {
  const searchInput = document.querySelector("#searchInput");
  const searchResults = document.querySelector("#searchResults");
  
  
  searchInput.addEventListener("keyup", async e => {
    const value = e.target.value
    searchResults.innerHTML = ""
    if(value.length > 0) {
      const posts = await searchPosts(value)

      for(let i = 0; i < posts.data.length; i++) {
        searchResults.innerHTML += `<li>
        <a href="/feed/?postId=${posts.data[i].id}"> ${posts.data[i].title}</a>
        </li>`
      }
      console.log(posts)
    }
  })

}

