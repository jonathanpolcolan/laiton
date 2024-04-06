// Función para crear y agregar un botón dinámicamente
function createButton() {
    var button = document.createElement("button");
    button.textContent = "Alerta";
    
    // Añadir evento de clic al botón
    button.addEventListener("click", function() {
        // Mostrar una alerta con el mensaje "Hola"
        alert("si te gusta el futbol y la historia esta es tu pagina");
    });
    
    // Agregar el botón al contenedor de botones en el HTML
    var buttonContainer = document.getElementById("buttonContainer");
    buttonContainer.appendChild(button);
}

// Llamar a la función para crear el botón al cargar la página
window.onload = createButton;
