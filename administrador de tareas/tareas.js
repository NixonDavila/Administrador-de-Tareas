

document.addEventListener("DOMContentLoaded", function(){
    let tareasInput = document.getElementById("TareaInput");
    let fechaSelect = document.getElementById('fecha');
    let agregarTareas = document.getElementById("agregarTarea");
    let conteiner = document.getElementById("contenedor");
    let tareas = document.getElementById("tareas");
    
    let listaTarea = JSON.parse(localStorage.getItem("tareas")) || [];
    
    function displayTask(tareaData) {
        let nuevoDiv = document.createElement("div");
        let parrafo = document.createElement("p");
        let eliminar = document.createElement("button");
        let editar = document.createElement("button");
        let prioridad = document.createElement("li");

        parrafo.innerHTML= tareaData.tarea;
        prioridad.innerHTML= tareaData.seleccion;
        eliminar.innerHTML="Eliminar";
        editar.innerHTML="Editar";
        parrafo.id = 'parrafoText';

        nuevoDiv.style.display = 'flex';
        nuevoDiv.style.justifyContent = 'space-around';
        nuevoDiv.style.flexDirection = 'row';

        nuevoDiv.appendChild(parrafo);
        nuevoDiv.appendChild(prioridad);
        nuevoDiv.appendChild(eliminar);
        nuevoDiv.appendChild(editar);
        conteiner.appendChild(nuevoDiv);

        eliminar.addEventListener("click", function () {
            const index = listaTarea.findIndex(tarea => tarea.tarea === tareaData.tarea && tarea.seleccion === tareaData.seleccion);
            
            if (index !== -1) {
                listaTarea.splice(index, 1);
                localStorage.setItem("tareas", JSON.stringify(listaTarea));
                nuevoDiv.remove();
                alert("Eliminado con éxito");
            }
        });

        editar.addEventListener("click", function () {
            let nuevaTarea = prompt("Edita la Tarea", tareaData.tarea);
            if (nuevaTarea !== null && nuevaTarea.trim() !== "") {
                tareaData.tarea = nuevaTarea;
                parrafo.innerHTML = nuevaTarea;
                localStorage.setItem("tareas", JSON.stringify(listaTarea));
            } else {
                console.log("No se realizó ninguna acción.");
            }
        });
    }

    listaTarea.forEach(displayTask);

    agregarTareas.addEventListener("click" , function () {
       
        const tareaTexto = tareasInput.value.trim(); // Eliminamos espacios en blanco

        // Comprobar si el input está vacío
        if (tareaTexto === "") {
            alert("Por favor, ingresa una tarea válida.");
            return; // No agregar la tarea si está vacía
        }
       
       
        const tareaData = {
            tarea: tareasInput.value,
            seleccion: fechaSelect.value
        };

        listaTarea.push(tareaData);
        localStorage.setItem("tareas", JSON.stringify(listaTarea));
        
        displayTask(tareaData);

        tareasInput.value = "";
        seleccion.value = "";
    });
});