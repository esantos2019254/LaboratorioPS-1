const userEmail = localStorage.getItem('userEmail');
const userPassword = localStorage.getItem('userPassword');

document.getElementById('userEmail').textContent = userEmail;
document.getElementById('userPassword').textContent = userPassword;

function agregarContacto() {
    window.location.href = "agregarContacto.html";
}

function detalleContacto(nombre, apellido, edad, telefono, correo) {
    // Obtén los valores del formulario

    // Crea un objeto con los datos
    let datos = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        telefono: telefono,
        correo: correo
    };

    // Convierte el objeto a cadena JSON y almacénalo en localStorage
    localStorage.setItem('datosFormulario', JSON.stringify(datos));

    // Redirige a la página de visualización
    window.location.href = "detalleContacto.html";
}

function favoritos() {
    window.location.href = "favoritos.html";
}

function toDoList() {
    window.location.href = "toDoList.html";
}