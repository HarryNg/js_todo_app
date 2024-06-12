let todoList = [];

const loadTodoList = () => {
    const todoListString = localStorage.getItem('todoList');
    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }
}

const saveTodoList = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

const addTodo = (todo) => {
    todoList.push({ text: todo, completed: false });
    saveTodoList();
    renderTodoList();
    updateCounter();
}


const addTodoForm = document.querySelector('#todoForm');

addTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoInput = document.querySelector('#task');
    const todo = todoInput.value;
    addTodo(todo);
    todoInput.value = '';
});


const renderTodoList = () => {
    const todoListElement = document.querySelector('#todoList');
    todoListElement.innerHTML = '';
    todoList.forEach((todo,index) => {
        const todoItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', (event) => {
            todo.completed = event.target.checked;
            saveTodoList();
            renderTodoList();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            saveTodoList();
            renderTodoList();
            updateCounter();
        });

        const todoDescription = document.createElement('label');
        todoDescription.textContent = todo.text;
        todoDescription.htmlFor = `task-${index}`;
        if (todo.completed) {
            todoDescription.style.textDecoration = 'line-through';
        }

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newTodo = prompt('Enter new task', todo.text);
            if (newTodo !== null) {
                todoList[index].text = newTodo;
                saveTodoList();
                renderTodoList();
            }
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoDescription);
        todoItem.appendChild(deleteButton);
        todoItem.appendChild(editButton);
        todoListElement.appendChild(todoItem);
    });
  }
const updateCounter = () => {
    const counter = document.querySelector('#counter');
    counter.textContent = "Total Todo Items: "+ todoList.length;
} 
document.addEventListener('DOMContentLoaded', () => {
    loadTodoList();
    renderTodoList();
    updateCounter();
});