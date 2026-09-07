
const form = document.forms.password;

const passwordelement = form.elements.password;

const confirmpasswordelement = form.elements['confirm-password'];


const termselement = form.elements.terms;

form.addEventListener('submit', function (event) {
    const password = passwordelement.value;
    const confirmpassword = confirmpasswordelement.value;
    const terms = termselement.checked;

    confirmpasswordelement.setCustomValidity('');

    if (!terms) {
        termselement.setCustomValidity('You must agree to the terms and conditions.');
    }

    if (password.length < 8) {
        passwordelement.setCustomValidity('Password must be at least 8 characters long.');
    }

    if (password !== confirmpassword) {
        confirmpasswordelement.setCustomValidity('Passwords do not match.');
    }

    if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
    }

});
