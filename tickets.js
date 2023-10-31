function calcularTotal() {
    const cantidad = document.getElementById("cantidadInput").value;
    const tipo = document.getElementById("tipoSelect").value;

    let total = cantidad * 200;

    if (tipo === "estudiante") {
        total -= total * 0.8; // Resta el 80% si el tipo es "estudiante"
    }
    else if (tipo === "junior") {
        total -= total * 0.5; 
    } else {
        total -= total * 0.15;
    }

    document.getElementById("totalPagar").textContent = `Total a Pagar: $${total.toFixed(2)}`;
}

function mostrarResumen() {
    const nombre = document.querySelector('input[placeholder="Nombre"]').value;
    const apellido = document.querySelector('input[placeholder="Apellido"]').value;
    const correo = document.querySelector('input[placeholder="Correo"]').value;
    const cantidad = document.getElementById("cantidadInput").value;
    const categoria = document.getElementById("tipoSelect").value;
    const total = document.getElementById("totalPagar").textContent;

    const resumen = `Nombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}\nCantidad: ${cantidad}\nCategoria: ${categoria}\nTotal a Pagar: ${total}`;

    alert(resumen);
}

function verificarRequisitos() {
    const nombre = document.querySelector('input[placeholder="Nombre"]').value;
    const apellido = document.querySelector('input[placeholder="Apellido"]').value;
    const correo = document.querySelector('input[placeholder="Correo"]').value;
    const cantidad = document.getElementById("cantidadInput").value;
    const categoria = document.getElementById("tipoSelect").value;

    if (nombre.trim() === '' || apellido.trim() === '' || correo.trim() === '' || cantidad.trim() === '' || categoria.trim() === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        mostrarResumen();
    }
}

document.getElementById('resumenButton').addEventListener('click', verificarRequisitos);
