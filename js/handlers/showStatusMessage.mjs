/**
 * Displays a status message on the webpage.
 * @param {string} alertType - The type of alert message to display. It can be "alert-success" or any other custom alert type.
 * @example
 * ```js
 * // Display a success message
 * showStatusMessage("alert-success");
 *
 * // Display an error message
 * showStatusMessage("alert-danger");
 * ```
 */
export function showStatusMessage(alertType, message, id, autoHide) {
  const statusMessage = document.querySelector(id);

  statusMessage.classList.add(alertType);
  statusMessage.classList.remove("d-none");
  statusMessage.innerHTML = message;
  if (autoHide) {
    setTimeout(() => {
      statusMessage.classList.add("d-none");
    }, 4000)
  }
}