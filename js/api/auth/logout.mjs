export function logoutBtn() {
  const logoutBtn = document.querySelector("#logout");

  if(logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      localStorage.removeItem("profile");
    })
  }
}