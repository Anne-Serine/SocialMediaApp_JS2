export function logoutBtn() {
  const logoutBtn = document.querySelector("#logout");

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
  })
}