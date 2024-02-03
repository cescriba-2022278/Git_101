let tasks = [];

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.sort((a, b) => a.priority - b.priority);

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${task.task}</span> - Prioridad: ${task.priority}
                        <button onclick="editTask(${index})">Editar</button>
                        <button onclick="deleteTask(${index})">Eliminar</button>`;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("task");
    const priorityInput = document.getElementById("priority");

    if (taskInput.value.trim() !== "") {
        const newTask = {
            task: taskInput.value.trim(),
            priority: parseInt(priorityInput.value, 10)
        };

        tasks.push(newTask);
        renderTasks();

        taskInput.value = "";
        priorityInput.value = 1;
    }
}

function editTask(index) {
    const newTask = prompt("Editar tarea:", tasks[index].task);
    const newPriority = prompt("Editar prioridad:", tasks[index].priority);

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index].task = newTask.trim();
        tasks[index].priority = parseInt(newPriority, 10);
        renderTasks();
    }
}

function deleteTask(index) {
    const confirmDelete = confirm("¿Estás seguro de que quieres eliminar esta tarea?");

    if (confirmDelete) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

renderTasks();


