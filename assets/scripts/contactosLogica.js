
function agregarContacto(){
    window.location.href = "agregarContacto.html";
}

function detalleContacto(){
    window.location.href = "detalleContacto.html";
}

function showDetails(nombre, apellido, edad, telefono, correo) {
    const detailsContainer = document.getElementById('detailsContainer');
    const detailsHTML = `
        <h2>Detalles del Contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellido:</strong> ${apellido}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <p><strong>Correo:</strong> ${correo}</p>
    `;
    // Inserta el HTML en el contenedor
    detailsContainer.innerHTML = detailsHTML;
}