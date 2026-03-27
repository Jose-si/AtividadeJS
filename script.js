const form = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

function isPasswordValid(password, minDigits) {
    if (password.length >= minDigits) {
        return true;
    }
    return false;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value.trim() === "") {
        alert("Por favor, preencha o campo de nome.");
        return;
    }

    if (emailInput.value.trim() === "") {
        alert("Por favor, preencha o campo de email.");
        return;
    }

    if (!isPasswordValid(passwordInput.value, 8)) {
        alert("A senha deve conter no mínimo 8 caracteres.");
        return;
    }

    alert("Formulário enviado com sucesso!");
    form.submit();
});