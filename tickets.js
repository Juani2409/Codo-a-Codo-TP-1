
function calcularTotal() {
    const cantidad = document.getElementById("cantidadInput").value;
    const tipo = document.getElementById("tipoSelect").value;

    let total = cantidad * 200;

    if (tipo === "estudiante") {
        total -= total * 0.8; // Resta el 80% si el tipo es "estudiante"
    }
    else if(tipo === "junior") {
        total -= total * 0.5; 
    }else{
        total -= total * 0.15;
    }

    document.getElementById("totalPagar").textContent = `Total a Pagar: $${total.toFixed(2)}`;
}






// Función para mostrar un resumen en una ventana emergente
function mostrarResumen() {
    const nombre = document.querySelector('input[placeholder="Nombre"]').value;
    const apellido = document.querySelector('input[placeholder="Apellido"]').value;
    const correo = document.querySelector('input[placeholder="Correo"]').value;
    const cantidad = document.getElementById("cantidadInput").value;
    const categoria = document.getElementById("tipoSelect").value;
    const total = document.getElementById("totalPagar").textContent;

    const resumen = `Nombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}\nCantidad: ${cantidad}\nCategoria: ${categoria}\nTotal a Pagar: ${total}`;

    // Muestra el resumen en una ventana emergente (popup)
    alert(resumen);
}

// Asigna el evento al botón "Resumen"
document.getElementById('resumenButton').addEventListener('click', mostrarResumen);
