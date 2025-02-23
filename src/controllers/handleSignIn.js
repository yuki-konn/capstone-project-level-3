export function handleSignIn(event = new Event(), onSignIn) {
  event.preventDefault();

  const closeButton = event.target[1];

  // Closes Modal
  closeButton.click();
  // Changes button to SignOutModal
  onSignIn();
}
