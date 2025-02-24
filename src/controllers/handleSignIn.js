import { authenticationAws } from "../modules/authenticationAws";

export async function handleSignIn(
  event = new Event(),
  onSignIn,
  setErrorMessage
) {
  event.preventDefault();

  const form = event.target;
  const email = event.target[1].value; // value of email input
  const password = event.target[2].value; // value of password input

  const closeButton = event.target[3];

  // RESOLVE VALUE BOOLEAN
  const isAuthenticated = await authenticationAws(email, password);
  if (isAuthenticated) {
    // Closes Modal
    closeButton.click();

    // RESET FORM
    form.reset();

    // Changes button to SignOutModal.
    onSignIn(); // Prop from SignInModal
  } else setErrorMessage("The email or password is incorrect.");
}
