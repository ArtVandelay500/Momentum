const todo_form = document.querySelector("#todo-form");
const todo_input = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");


function deleteToDo(item){
    console.dir(item);
    
    const li = item.target.node;
} 

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodo(event){
    event.preventDefault();
    const newTodo = todo_input.value;
    paintToDo(newTodo);
}


todo_form.addEventListener("submit",handleTodo);

