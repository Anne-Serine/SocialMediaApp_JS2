import { createPost } from "../api/posts/createPost.mjs";

export async function setCreatePostListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const form = event.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      // console.log(data)
      createPost(data.title, data.content, data.image).then((postData) => {
        console.log(postData)
      })
    })
  }
}