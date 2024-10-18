// Establecer usuario y contraseña inicial en localStorage (esto lo haces solo una vez)
if (!localStorage.getItem("username") || !localStorage.getItem("password")) {
    localStorage.setItem("username", "admin2011"); // Usuario por defecto
    localStorage.setItem("password", "190218"); // Contraseña por defecto
}

function login() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        // Ocultar el login y mostrar todo el contenido protegido
        document.getElementById("login-container").style.display = "none";
        document.getElementById("protected-content").style.display = "block"; // Muestra todo el contenido bloqueado
        localStorage.setItem("loggedIn", "true"); // Marcar como logueado
    } else {
        document.getElementById("error-message").textContent = "Usuario o contraseña incorrectos";
    }
}

// Verificar si el usuario ya está logueado
if (localStorage.getItem("loggedIn") === "true") {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("protected-content").style.display = "block"; // Mostrar todo el contenido protegido si está logueado
}
