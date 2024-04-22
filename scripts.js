// Animación de parpadeo del precio
function parpadearPrecio() {
    var precio = document.getElementById("precio");
    setInterval(function() {
        precio.style.opacity = (precio.style.opacity == 0) ? 1 : 0;
    }, 1000);
}

// Cambiar el precio cada 5 segundos
function cambiarPrecio() {
    var precios = ["$0.0001", "$0.0002", "$0.0003", "$0.0004", "$0.0005"]; // Lista de precios
    var indice = 0;
    setInterval(function() {
        document.getElementById("precio").innerText = "Precio actual: " + precios[indice];
        indice = (indice + 1) % precios.length;
    }, 5000); // Cambiar cada 5 segundos
}

// Mostrar un modal de compra
function mostrarModalCompra() {
    var modal = document.getElementById("modal-compra");
    modal.style.display = "block";
}

// Cerrar el modal de compra
function cerrarModalCompra() {
    var modal = document.getElementById("modal-compra");
    modal.style.display = "none";
}
