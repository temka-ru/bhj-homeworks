const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

tasksForm.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskElement = createTaskElement(taskText);
        tasksList.appendChild(taskElement);
        saveTasks();
        taskInput.value = '';
    }
}

function createTaskElement(taskText) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
        <div class="task__title">${taskText}</div>
        <a href="#" class="task__remove">&times;</a>
    `;
    taskElement.querySelector('.task__remove').addEventListener('click', removeTask);
    return taskElement;
}

function removeTask(event) {
    event.preventDefault();
    const taskElement = event.target.parentElement;
    tasksList.removeChild(taskElement);
    saveTasks();
}

function saveTasks() {
    const tasks = Array.from(tasksList.children).map((taskElement) => {
        return taskElement.querySelector('.task__title').textContent;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function restoreTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        savedTasks.forEach((taskText) => {
        const taskElement = createTaskElement(taskText);
        tasksList.appendChild(taskElement);
        });
    }
}

restoreTasks();