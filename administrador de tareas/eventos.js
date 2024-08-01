
document.addEventListener("DOMContentLoaded", function() {
    let eventoInput = document.getElementById("event");
    let tipoDate = document.getElementById('fecha');
    let agregarEvento = document.getElementById("agregarEvento");
    let contEventos = document.getElementById("cont-eventos");
    
    // Cargar la lista de eventos desde localStorage
    let listaEvento = JSON.parse(localStorage.getItem("eventos")) || [];
    
    // Función para mostrar cada evento
    function displayTask(eventosData) {
        let nuevoDiv = document.createElement("div");
        let parrafo = document.createElement("p");
        let eliminar = document.createElement("button");
        let editar = document.createElement("button");
        let fecha = document.createElement("li");

        // Asignar el evento y la fecha a los elementos correspondientes
        parrafo.innerHTML = eventosData.evento;
        fecha.innerHTML = eventosData.date; // Mostrar la fecha
        eliminar.innerHTML = "Eliminar";
        editar.innerHTML = "Editar";
        parrafo.id = 'parrafoText';

        // Estilo del nuevo div
        nuevoDiv.style.display = 'flex';
        nuevoDiv.style.justifyContent = 'space-around';
        nuevoDiv.style.flexDirection = 'row';

        // Agregar los elementos al nuevo div
        nuevoDiv.appendChild(parrafo);
        nuevoDiv.appendChild(fecha); // Asegúrate de agregar el elemento de fecha
        nuevoDiv.appendChild(eliminar);
        nuevoDiv.appendChild(editar);
        contEventos.appendChild(nuevoDiv);

        // Manejo del evento eliminar
        eliminar.addEventListener("click", function () {
            const index = listaEvento.findIndex(evento => evento.evento === eventosData.evento && evento.date === eventosData.date);
            
            if (index !== -1) {
                listaEvento.splice(index, 1);
                localStorage.setItem("eventos", JSON.stringify(listaEvento));
                nuevoDiv.remove();
                alert("Eliminado con éxito");
            }
        });

        // Manejo del evento editar
        editar.addEventListener("click", function () {
            let nuevaevento = prompt("Edita el evento", eventosData.evento);
            if (nuevaevento !== null && nuevaevento.trim() !== "") {
                eventosData.evento = nuevaevento;
                parrafo.innerHTML = nuevaevento;
                localStorage.setItem("eventos", JSON.stringify(listaEvento));
            } else {
                console.log("No se realizó ninguna acción.");
            }
        });
    }

    // Mostrar todos los eventos guardados al cargar la página
    listaEvento.forEach(displayTask);

    // Manejo del evento agregar
    agregarEvento.addEventListener("click", function () {
        const eventoTexto = eventoInput.value.trim(); // Eliminamos espacios en blanco
        const fechaTexto = tipoDate.value.trim(); // Eliminamos espacios en blanco

        // Comprobar si los campos están vacíos
        if (eventoTexto === "" || fechaTexto === "") {
            alert("Por favor, completa todos los campos.");
            return; // Salir de la función si algún campo está vacío
        }

        const eventosData = {
            evento: eventoTexto,
            date: fechaTexto // Usamos evento y date
        };

        listaEvento.push(eventosData);
        localStorage.setItem("eventos", JSON.stringify(listaEvento));
        
        displayTask(eventosData); // Mostrar el nuevo evento

        // Limpiar los inputs después de agregar el evento
        eventoInput.value = "";
        tipoDate.value = "";
    });
});
