export function sharePostLink(singlePostModal) {
  const shareBtn = singlePostModal.querySelector('[data-share-btn-id]');
  
  shareBtn.addEventListener("click", () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    shareBtn.innerText = "Copied"
    setTimeout(() => {
      shareBtn.innerText = "Share"
    }, 2000)
  })
}