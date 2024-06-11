let todoList = [];

const addTodo = (todo) => {
  todoList.push(todo);
  renderTodoList();
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
        });
        
        const todoDescription = document.createElement('label');
        todoDescription.textContent = todo;
        todoDescription.htmlFor = `task-${index}`;

        todoItem.appendChild(deleteButton);
        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoDescription);
        todoListElement.appendChild(todoItem);
    });
  }
  
document.addEventListener('DOMContentLoaded', () => {
    renderTodoList();
});