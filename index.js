let todoList = [];

const addTodo = (todo) => {
  todoList.push(todo);
}

const addTodoForm = document.querySelector('#todoForm');

addTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoInput = document.querySelector('#task');
    const todo = todoInput.value;
    addTodo(todo);
    todoInput.value = '';
});