// обработчик на "Добавить задачу"
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Пожалуйста, введите задачу!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    // элемент для текста задачи
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // "Выполнено"
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Выполнено';
    completeBtn.addEventListener('click', function() {
        taskSpan.classList.toggle('completed');
    });

    // "Удалить"
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(taskSpan); 
    li.appendChild(completeBtn); 
    li.appendChild(deleteBtn); 
    
    taskList.appendChild(li);
    taskInput.value = ''; 
});