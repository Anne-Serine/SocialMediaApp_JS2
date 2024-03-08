import { generateTags } from "./postTemplate.mjs";

export function singlePostTemplate(post) {
  const formattedDate = new Date(post.created);

  return `<div class="card image-card border-0 p-3 d-flex justify-content-center mb-2" id="postTemplateCard">
      ${post.media ? `<img src="${post.media.url}" class="mb-2" alt="${post.media.alt}">` : "No image"}
    <div class="container">
      <div class="row">
        <p class="h5 text-secondary">@${post.author.name}</p>
      </div>
      <div class="row">
        <h3 class="h4">${post.title}</h3>
      </div>
      <div class="row">
        <p>${formattedDate.toLocaleString()}</p>
      </div>
      <div class="row">
        <p>${post.body}</p>
      </div>
      <div class="row fw-semibold">
        ${generateTags(post.tags)}
      </div>
    </div> 
    <button value=${post.id} class="btn btn-primary" data-share-btn-id="${post.id}">Share</button>
  </div>`
}