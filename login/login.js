


document.addEventListener("DOMContentLoaded", function() {
    // Obtiene los elementos del DOM para el email, contraseña y botón de login
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("btnLogin");

    // Agrega un event listener al botón de login que se ejecutará al hacer clic
    loginButton.addEventListener("click", function(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario

        // Obtiene los valores ingresados en los campos de email y contraseña
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Obtiene el array de usuarios guardado en localStorage
        const storedUsers = JSON.parse(localStorage.getItem("user")) || [];

        // Verifica si el usuario existe y si las credenciales coinciden
        const user = storedUsers.find(u => u.email === emailValue && u.password === passwordValue);
        if (user == null) {
  alert("usuario no existe")
           } else if (user) {
           
            // Si las credenciales son correctas, redirige al usuario
            Swal.fire({
                title: "login exitoso.",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://sweetalert2.github.io/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              });
              setTimeout(() => {
                window.location.href = 'http://127.0.0.1:5501/Administrador-de-Tareas/administrador%20de%20tareas/tareas.html';
              }, 1500);
           
        } else {
            // Si las credenciales no coinciden, muestra un mensaje de error
            alert('Email o contraseña incorrectos');
        }

        

        // Limpia los campos de email y contraseña
        emailInput.value = "";
        passwordInput.value = "";
    });
});
