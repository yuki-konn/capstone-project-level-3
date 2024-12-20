// OUTPUT FUNCTION
export function output(
  message = "",
  outputTag = "outputTag",
  shouldAppend = true
) {
  if (shouldAppend) window[outputTag].innerHTML += message;
  else window[outputTag].innerHTML = message;
}

// function output(message) {
//   outputTag.innerHTML += message;
// }