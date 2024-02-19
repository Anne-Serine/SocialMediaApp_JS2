export function singlePostTamplate(post) {
  const formattedDate = new Date(post.created);

  return `<div class="card image-card border-0 p-3 d-flex justify-content-center mb-2" id="postTemplateCard">
    <div class="container row">
      <div class="col img-fluid mb-2">
      ${post.media ? `<img src="${post.media.url}" alt="${post.media.alt}">` : "No image"}
      </div>
    </div>

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
    </div> 
    <button value=${post.id} class="btn btn-primary me-2" data-share-btn-id="${post.id}">Share</button>
  </div>`
}