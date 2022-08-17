const todos = [];

const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');
const demoTodo = document.getElementById('demoTodo');

addTodoButton.addEventListener('click', addTodo);

function addTodo() {
    const todoInputValue = todoInput.value;

    todos.push( {
        id: uuid(),
        name: todoInputValue
    } );

    renderTodos();
}

function renderTodos() {

    // remove all todos

    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }

    // for each todo

    todos.forEach( todo => {

        // clone demo todo
        const newTodoElement = demoTodo.cloneNode(true);

        // remove id attribue
        newTodoElement.removeAttribute('id');

        newTodoElement.setAttribute('data-identifier', todo.id);

        newTodoElement.addEventListener('click', deleteTodo);

        // set innerText to todo name
        newTodoElement.innerText = todo.name;

        // appendChild cloned todo to todoList
        todoList.appendChild(newTodoElement);

    } );
}

function deleteTodo(event) {

    // find data identifier

    const id = event.target.dataset.identifier;

    // delete todo with identifier from array

    const todoIndex = todos.findIndex( todo => todo.id === Number(id) );

    if (todoIndex !== -1) todos.splice(todoIndex, 1);

    // call renderTodos function

    renderTodos();
}

function uuid() {
    return Math.floor( Math.random() * 1000000000 );
}