import { generateTags } from "./postTemplate.mjs";

export function singlePostTemplate(post) {
  // Destructuring post object
  const {created, media, author, title, body, tags, id} = post;
  const formattedDate = new Date(created);

  return `<div class="container card image-card border-0 d-flex justify-content-center" id="postTemplateCard">
      ${media ? `<img src="${media.url}" class="mb-2" alt="${media.alt}">` : "No image"}
    <div class="mb-4">
      <div class="row mb-3">
        <p class="h5 text-secondary fs-6">Published by: @${author.name}</p>
      </div>
      <div class="row">
        <h3 class="h4">${title}</h3>
      </div>
      <div class="row">
        <p>${formattedDate.toLocaleDateString()}</p>
      </div>
      <div class="row">
        <p>${body}</p>
      </div>
      <div class="row fw-semibold">
        ${generateTags(tags)}
      </div>
    </div> 
    <div class="container row">
      <button value=${id} class="btn btn-primary col-7 col-lg-4 col-xl-3 " data-share-btn-id="${id}"><i class="fa-solid fa-share-nodes me-2"></i>Share</button>
    </div class="row">
  </div>`
}