const form = document.querySelector('form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zip');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

function checkEmailError() {
    const message = email.nextElementSibling;
    if (email.validity.valid) {
        message.textContent = '';
    }
    if (email.validity.valueMissing) {
        message.textContent = 'Please enter an email';
    } else if (email.validity.typeMismatch) {
        message.textContent = 'Enter a valid email address';
    }
}

email.addEventListener('blur', checkEmailError);

function checkCountryError() {
    const message = country.nextElementSibling;
    if (country.validity.valid) {
        message.textContent = '';
    }
    if (country.validity.patternMismatch) {
        message.textContent = 'Name not valid';
    }
}

country.addEventListener('blur', checkCountryError);

function checkZipCodeError() {
    const message = zipCode.nextElementSibling;
    if (zipCode.validity.valid) {
        message.textContent = '';
    }
    if (zipCode.validity.patternMismatch) {
        message.textContent = 'Zip code must contain 4 digits';
    }
}

zipCode.addEventListener('blur', checkZipCodeError);

function checkPasswordError() {
    const message = password.nextElementSibling;
    if (password.validity.valid) {
        message.textContent = '';
    }
    if (password.validity.valueMissing) {
        message.textContent = 'You must enter a password';
    } else if (password.validity.patternMismatch) {
        message.textContent =
            'The password must be 8 digits long and contain uppercase, lowercase and number characters';
    } else if (password.validity.tooShort) {
        message.textContent =
            'The password must be 8 digits long and contain uppercase, lowercase and number characters';
    }
}

password.addEventListener('blur', checkPasswordError);

function checkConfirmPasswordError() {
    const message = confirmPassword.nextElementSibling;
    if (confirmPassword.validity.valid) {
        message.textContent = '';
    }
    if (confirmPassword.validity.valueMissing) {
        message.textContent = 'You must enter a confirmation password';
    } else if (password.value !== confirmPassword.value) {
        message.textContent = 'The passwords you entered are different';
    }
}

confirmPassword.addEventListener('blur', checkConfirmPasswordError);

form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault();
        checkEmailError();
        checkCountryError();
        checkZipCodeError();
        checkPasswordError();
        checkConfirmPasswordError();
    }
});
