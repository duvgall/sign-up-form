let password = document.getElementById("password");
let confirmPassword = document.getElementById("password-confirm");
let btn = document.getElementById("submit");

function validatePassword() {
    if(password.value != confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords do not match");
            confirmPassword.reportValidity();
            console.log("password.value")
    } else {
            confirmPassword.setCustomValidity("");
            console.log("password.value")
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
