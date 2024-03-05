export function postTemplate(post, userName) {
  const formattedDate = new Date(post.created);

  return `<div class="container card image-card p-3 d-flex justify-content-center mb-2" id="postTemplateCard">
            <div class="row mb-2">
              <div class="col col-xl-10 d-flex align-items-center gap-2">
                <div class="avatar-image overflow-hidden rounded-circle">
                  <img src="${post.author.avatar.url}" alt="${post.author.avatar.alt}">
                </div>
                <p class="h5 text-secondary m-0">@${post.author.name}</p>
              </div>

              <div class="col-2 d-flex justify-content-end">

                ${userName === post.author.name ? 
                  `<div class="dropdown">
                    <button class="border-0 bg-transparent" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa-solid fa-ellipsis"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end p-2">
                      <button value=${post.id} class="btn btn-outline-dark border-0 d-flex gap-1 align-items-center" data-post-id="${post.id}"><i class="fa-solid fa-pen"></i>Edit</button>
                      <button value=${post.id} class="btn btn-outline-danger border-0 d-flex gap-1 align-items-center" data-delete-post-id="${post.id}"><i class="fa-solid fa-trash"></i>Delete</button>
                    </div>
                  </div>`
                  : ""
                }
              </div>
              
            </div>
            <div class="row mb-2">
              ${post.media ? `<img src="${post.media.url}" class="img-fluid w-100" alt="${post.media.alt}">` : ""}
            </div>
            <div class="row">
              <p>${formattedDate.toLocaleDateString("en-en", {weekday:"long", year:"numeric", month:"long", day:"numeric"})}</p>
            </div>
            <div class="row mt-2">
              <h3 class="h4">${post.title}</h3>
            </div>
            <div class="row">
              <p>${post.body ? post.body : ""}</p>
            </div>
            <div class="row">
              <div class="col d-flex gap-2 text-info-emphasis flex-wrap wrap">
                ${generateTags(post.tags)}
              </div>
            </div>
            <hr>
            <div class="d-flex gap-3">
              <div class="justify-content-start">
                <i class="fa-regular fa-heart fs-4"></i>
              </div>
              <div class="justify-content-start">
                <a href="#" class="gap-2 d-flex align-items-center link-underline link-underline-opacity-0 text-dark" disabled>
                  <i class="fa-regular fa-comment fs-4"></i>
                  <span>Comments</span>
                </a>
              </div>
              <div class="d-flex justify-content-end">
                <a href="#" value=${post.id} class="me-2 link-underline link-underline-opacity-0" data-view-post-id="${post.id}">View post</a>
              </div>
            </div>
            
            <div class="container row mt-3 d-flex align-items-center justify-content-between">
              <textarea class="col-10 border p-2 rounded outline-none" placeholder="Add a comment..."></textarea>
              <i class="fa-solid fa-share col-1 fs-4"></i>
            </div>
            
          </div>`
}


export function generateTags(tags) {
  const tagsContainer = document.createElement("div");

  for(let i = 0; i < tags.length; i++) {
    if(tags[i]) {
      tagsContainer.textContent += `<div>#${tags[i]}</div>`
    }
  }
  return tagsContainer.innerText
}

