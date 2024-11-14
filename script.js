const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const logiinBtn = document.getElementById('login');

function clearInputs() {
    const inputs = document.querySelectorAll('.form-container input');
    inputs.forEach(input => input.value = '');
}

registerBtn.addEventListener('click', () =>{
    clearInputs();
    container.classList.add("active")
});

logiinBtn.addEventListener('click', () =>{
    clearInputs();
    container.classList.remove("active")
});