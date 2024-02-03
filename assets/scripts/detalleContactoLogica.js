// Obtiene los datos almacenados en localStorage
let datosJSON = localStorage.getItem('datosFormulario');

if (datosJSON) {
    let datos = JSON.parse(datosJSON);
    let datosContainer = document.getElementById('detailsContainer');
    datosContainer.innerHTML = `
            <table class="table table-dark table-bordered table-responsive table-striped">
                <thead>
                    <tr>
                        <th scope="col" class="col-sm-1">#</th>
                        <th scope="col" class="col-sm-2">Nombre</th>
                        <th scope="col" class="col-sm-2">Apellido</th>
                        <th scope="col" class="col-sm-2">Edad</th>
                        <th scope="col" class="col-sm-3">Teléfono</th>
                        <th scope="col" class="col-sm-2">Correo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>${datos.nombre}</td>
                        <td>${datos.apellido}</td>
                        <td>${datos.edad}</td>
                        <td>${datos.telefono}</td>
                        <td>${datos.correo}</td>
                    </tr>
                </tbody>
            </table>
            `;
}