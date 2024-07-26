document.addEventListener("DOMContentLoaded", function(){
let tareasInput = document.getElementById("TareaInput")
let tipoSelect = document.getElementById('tipo');
let agregarTareas = document.getElementById("agregarTarea")
let conteiner = document.getElementById("contenedor");
let tareas = document.getElementById("tareas")

let listaTarea = []

JSON.parse(localStorage.getItem("tareas"))


agregarTareas.addEventListener("click" , function () {

    const tareaData={
        tarea: tareasInput.value,
        seleccion: tipoSelect.value
    }

   listaTarea.push(tareaData)

    localStorage.setItem("tareas" , JSON.stringify(listaTarea))
    
    let nuevoDiv = document.createElement("div")
    let parrafo = document.createElement("p")
    let eliminar = document.createElement("button")
    let editar = document.createElement("button")
    let prioridad = document.createElement("li")
   

    parrafo.innerHTML= tareaData.tarea;
    prioridad.innerHTML= tareaData.seleccion;
    eliminar.innerHTML="Eliminar";
    editar.innerHTML="Editar"
    parrafo.id = 'parrafoText'


    nuevoDiv.style.display = 'flex'
    nuevoDiv.style.justifyContent = 'space-around';
    nuevoDiv.style.flexDirection = 'row';

    nuevoDiv.appendChild(parrafo)
    nuevoDiv.appendChild(prioridad)
    nuevoDiv.appendChild(eliminar)
    nuevoDiv.appendChild(editar)
    conteiner.appendChild(nuevoDiv)




    eliminar.addEventListener("click", function () {
        // Encuentra el índice de la tarea que coincide con los valores actuales
        const index = listaTarea.forEach(tarea => tarea.tarea === tareaData.tarea && tarea.seleccion === tareaData.seleccion);
        
        if (index !== -1) {
            // Elimina la tarea del array
            listaTarea.splice(index, 1);
            
            // Actualiza localStorage
            localStorage.setItem("tareas", JSON.stringify(listaTarea));
    
            // Elimina el elemento del DOM
            parrafo.remove();
            eliminar.remove();
            editar.remove();
            prioridad.remove();
    
            alert("Eliminado con éxito");
        }
    });
   

})

})











// document.addEventListener("DOMContentLoaded", function() {
//     let tareasInput = document.getElementById("tareasInput");
//     let agregarTareas = document.getElementById("agregarTarea");
//     let conteiner = document.getElementById("contenedor");

//     // Cargar tareas desde localStorage al iniciar
//     let tareas = JSON.parse(localStorage.getItem("tareas") || "[]");

//     function renderTareas() {
//         conteiner.innerHTML = ""; // Limpiar contenedor antes de renderizar
//         tareas.forEach((tareaData, index) => {
//             let parrafo = document.createElement("p");
//             let eliminar = document.createElement("button");
//             let editar = document.createElement("button");

//             parrafo.innerHTML = tareaData.tarea; // Error corregido aquí
//             eliminar.innerHTML = "Eliminar";
//             editar.innerHTML = "Editar";

//             conteiner.appendChild(parrafo);
//             conteiner.appendChild(eliminar);
//             conteiner.appendChild(editar);

//             eliminar.addEventListener("click", function() {
//                 tareas.splice(index, 1); // Eliminar tarea del array
//                 localStorage.setItem("tareas", JSON.stringify(tareas)); // Actualizar localStorage
//                 renderTareas(); // Volver a renderizar tareas
//                 alert("Eliminado con éxito");
//             });

//             editar.addEventListener("click", function() {
//                 let nuevaTarea = prompt("Edita tarea", tareaData.tarea);

//                 if (nuevaTarea !== null && nuevaTarea.trim() !== "") {
//                     tareaData.tarea = nuevaTarea;
//                     localStorage.setItem("tareas", JSON.stringify(tareas)); // Actualizar localStorage
//                     renderTareas(); // Volver a renderizar tareas
//                 }
//             });
//         });
//     }

//     renderTareas(); // Inicializar tareas al cargar la página

//     agregarTareas.addEventListener("click", function() {
//         const tareaTexto = tareasInput.value.trim(); // Error corregido aquí

//         if (tareaTexto === "") { // Validación de entrada vacía
//             alert("Por favor, ingresa una tarea.");
//             return;
//         }

//         const tareaData = {
//             tarea: tareaTexto
//         };

//         tareas.push(tareaData); // Añadir nueva tarea al array
//         localStorage.setItem("tareas", JSON.stringify(tareas)); // Guardar en localStorage
//         tareasInput.value = ""; // Limpiar campo de entrada
//         renderTareas(); // Volver a renderizar tareas
//     });
// });

