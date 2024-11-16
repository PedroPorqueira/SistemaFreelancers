document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert(`Bem-vindo de volta, ${user.name}!`);
        window.location.href = "quotes.html";
    } else {
        alert("E-mail ou senha incorretos.");
    }
});