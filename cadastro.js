document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { name, email, password };

    localStorage.setItem(email, JSON.stringify(user));
    

    alert(`Cadastro realizado! Bem-vindo, ${name}.`);

    window.location.href = "../login/login.html";
});