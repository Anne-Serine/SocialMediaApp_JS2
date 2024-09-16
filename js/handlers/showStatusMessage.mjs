/**
 * Displays a status message on the specified element with the given message and styling.
 * @param {string} alertType - The type of alert to be displayed (e.g., "alert-success", "alert-danger").
 * @param {string} message - The message to be displayed in the status message.
 * @param {string} id - The ID of the element where the status message will be displayed.
 * @param {boolean} autoHide - Determines whether the status message should automatically hide after a certain time.
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