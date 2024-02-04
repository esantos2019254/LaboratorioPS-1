
let tareas = [];

function addTask() {

    const inputTarea = document.getElementById('inputTarea');
    const nuevaTarea = inputTarea.value;

    if (nuevaTarea !== '') {
        tareas.push({ tarea: nuevaTarea, priority: Math.floor(Math.random() * 10) + 1 });
        inputTarea.value = '';
        cargarTareas();
    }
}

function cargarTareas() {

    const listaTarea = document.getElementById('listaTarea');

    tareas.sort((a, b) => a.priority - b.priority);

    listaTarea.innerHTML = '';

    tareas.forEach(tarea => {
        const listaItem = document.createElement('li');
        listaItem.textContent = `${tarea.tarea} (No.: ${tarea.priority})`;

        const botonEditar = document.createElement('button');
        botonEditar.textContent = 'Editar';
        botonEditar.className = 'btn btn-success btnEditar';
        botonEditar.addEventListener('click', () => editTask(tarea.tarea));

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'btn btn-danger btnEliminar';
        botonEliminar.addEventListener('click', () => deleteTask(tarea.tarea));

        listaItem.appendChild(botonEditar);
        listaItem.appendChild(botonEliminar);
        listaTarea.appendChild(listaItem);
    });
}

function editTask(tarea) {
    const nuevaTarea = prompt('Editar tarea:', tarea);
    if (nuevaTarea !== null && nuevaTarea !== '') {
        const index = tareas.findIndex(t => t.tarea === tarea);
        tareas[index].tarea = nuevaTarea;
        cargarTareas();
    }
}

function deleteTask(tarea) {
    tareas = tareas.filter(t => t.tarea !== tarea);
    cargarTareas();
}