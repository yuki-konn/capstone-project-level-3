// SERVER RESPONSE contact.html
export function getServerResponse(resolve) {
  setTimeout(activateResolve, 5000);
  function activateResolve() {
    const response = {
      message: "<b style='color: green'>SUCCESSFULLY PROCESSED</b>",
    };
    // Server stringifies a object and replies with a string.
    const resolveValue = JSON.stringify(response);
    resolve(resolveValue);
  }
}
