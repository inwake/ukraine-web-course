const todos = [];

const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');
const demoTodo = document.getElementById('demoTodo');

addTodoButton.addEventListener('click', addTodo);

function addTodo() {
    const todoInputValue = todoInput.value;

    todos.push( {
        id: '1234',
        name: todoInputValue
    } );

    renderTodos();
}

function renderTodos() {

    // remove all todos

    while (todoList.firstChild.nodeName === 'LI'
        && todoList.firstChild.getAttribute('id') !== 'demoTodo') {
        if (todoList.firstChild.getAttribute('id') !== 'demoTodo')
            todoList.removeChild(todoList.lastChild);
    }

    // for each todo

    todos.forEach( todo => {

        // clone demo todo
        const newTodoElement = demoTodo.cloneNode();

        // remove id attribue
        newTodoElement.removeAttribute('id');

        // set innerText to todo name
        newTodoElement.innerText = todo.name;

        // appendChild cloned todo to todoList
        todoList.appendChild(newTodoElement);

    } );

    console.log(todos)

}