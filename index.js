let todoList = [];

const addTodo = (todo) => {
    todoList.push(todo);
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
        checkbox.addEventListener('change', (event) => {
            if (event.target.checked) {
            todoItem.style.textDecoration = 'line-through';
            } else {
            todoItem.style.textDecoration = 'none';
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
            updateCounter();
        });

        const todoDescription = document.createElement('label');
        todoDescription.textContent = todo;
        todoDescription.htmlFor = `task-${index}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newTodo = prompt('Enter new task');
            todoList[index] = newTodo;
            renderTodoList();
        });

        todoItem.appendChild(deleteButton);
        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoDescription);
        todoItem.appendChild(editButton);
        todoListElement.appendChild(todoItem);
    });
  }
const updateCounter = () => {
    const counter = document.querySelector('#counter');
    counter.textContent = "Total Todo Items: "+ todoList.length;
} 
document.addEventListener('DOMContentLoaded', () => {
    renderTodoList();
    updateCounter();
});