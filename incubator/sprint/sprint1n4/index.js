document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todoList');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const newTaskDialog = document.getElementById('newTaskDialog');
    const newTaskInput = document.getElementById('newTaskInput');
    const confirmTaskBtn = document.getElementById('confirmTaskBtn');

    let tasks = [
        { id: 1, text: 'Learn HTML' },
        { id: 2, text: 'Learn CSS' },
        { id: 3, text: 'Learn JS' },
        { id: 4, text: 'Learn React' }
    ];

    // Функция создания элемента задачи
    function createTaskElement(task) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${task.text} <button>❌</button>`;

        const deleteButton = listItem.querySelector('button');
        deleteButton.addEventListener('click', () => deleteTask(task.id));

        return listItem;
    }

    // Функция отрисовки задач
    function renderTasks() {
        todoList.innerHTML = '';
        tasks.forEach(task => {
            const listItem = createTaskElement(task);
            todoList.appendChild(listItem);
        });
    }

    // Функция удаления задачи
    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    }

    // Инициализация
    renderTasks();

    // Обработка кнопки "Добавить"
    addTaskBtn.addEventListener('click', () => {
        newTaskDialog.style.display = 'block';
    });

    // Обработка кнопки "Подтвердить"
    confirmTaskBtn.addEventListener('click', () => {
        const newTaskText = newTaskInput.value.trim();
        if (newTaskText) {
            const newTask = { id: tasks.length + 1, text: newTaskText };
            tasks.push(newTask);
            renderTasks();
            newTaskInput.value = '';
            newTaskDialog.style.display = 'none';
        }
    });
});
