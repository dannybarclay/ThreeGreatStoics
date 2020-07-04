const signUpForm = document.getElementById("signUpField");
const emailField = document.getElementById("email");
const okButton = document.getElementById("okButton");

emailField.Field.addEventListener("keyup", function (event) {
    isVaidEmail = emailField.checkValidity();

    if ( isValidEmail ) {
        okButton.disabled = false;
    } else {
        okButton.disabled = true;
    }
});

okButton.addEventListener("click", function (event) {
    signUpForm.submit()
});