// add event listener on enter keypress to #todoInput

document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const newListItem = document.createElement('li');

        newListItem.innerHTML = document.getElementById('todoInput').value;

        document.getElementById('todoList').appendChild(newListItem);

        document.getElementById('todoInput').value = '';
    }
})

document.getElementById('deleteAllButton').addEventListener('click', function () {
    document.getElementById('todoList').innerHTML = '';
})

function saveTodoList () {
    const todos = [];
    const todoItems = document.querySelectorAll('#todoList li');
    todoItems.forEach((item) => {
        todos.push(item.textContent);
    });
    localStorage.setItem('todoList', JSON.stringify(todos));
}

function loadTodoList() {
    const todos = JSON.parse(localStorage.getItem('todoList'));
    if (!todos) return;

    const todoList = document.getElementById('todoList');
    todos.forEach(todoText => {
        const li = document.createElement('li');
        li.textContent = todoText;

        li.addEventListener('click', function() {
            li.remove();
            saveTodoList();
        });

        todoList.appendChild(li);
    });
}
