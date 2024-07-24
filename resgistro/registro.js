


  


let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
const enviarRegis = document.getElementById("btn");

// Obtener datos existentes del localStorage o inicializar un array vacío
let user = JSON.parse(localStorage.getItem("user")) || [];

enviarRegis.addEventListener("click", function () {
   
    if (userName.value === "" || email.value === "" || password.value === "") {
        alert("Por favor, llenar todos los campos.");
        return;
    }
   
   
   
    let userData = {
        name: userName.value,
        email: email.value,
        password: password.value,
    };

   
    // Verificar si el usuario ya existe en el array
    let userExists = user.some((u) => u.email === userData.email);
    if (userExists) {
        alert("Este usuario ya está registrado.");
        return; // Detener el proceso de registro
    }else{
        alert("Usuario registrado exitosamente.");
    }
    

    // Agregar el nuevo usuario al array
    user.push(userData);

    // Guardar el array actualizado en localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Limpiar los campos del formulario
    userName.value = "";
    email.value = "";
    password.value = "";

    
});
