export function postTamplate(post) {
  const formattedDate = new Date(post.created);

  return `<div class="card image-card p-3 d-flex justify-content-center mb-2">
  <div class="row">
    <div class="col-6">
      <div class="rounded-circle overflow-hidden post-image img-fluid">
      ${post.media ? `<img src="${post.media.url}" alt="${post.media.alt}">` : "No image"}
      </div>
    </div>
    <div class="col-6 d-flex align-items-center">
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
        <div class="row d-none d-md-block">
          <p>${post.body}</p>
        </div>
        <div class="d-flex justify-content-end">
          <button value=${post.id} class="btn btn-dark me-2" data-post-id=${post.id}>Edit</button>
          <button value=${post.id} class="btn btn-danger" data-delete-post-id=${post.id}>Delete</button>
        </div>
      </div> 
    </div>
  </div>
</div>`
}