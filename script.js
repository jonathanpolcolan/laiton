// Función para crear y agregar un botón dinámicamente
function createButton() {
    var button = document.createElement("button");
    button.textContent = "Mostrar Imagen";
    
    // Añadir evento de clic al botón
    button.addEventListener("click", function() {
        var image = document.getElementById("imageContainer");
        // Cambiar la ruta de la imagen a "foto.png"
        image.src = "millos.mp4";
        // Mostrar la imagen estableciendo su estilo display en "block"
        image.style.display = "block";
    });
    
    // Agregar el botón al contenedor de botones en el HTML
    var buttonContainer = document.getElementById("buttonContainer");
    buttonContainer.appendChild(button);
}

// Llamar a la función para crear el botón al cargar la página
window.onload = createButton;
