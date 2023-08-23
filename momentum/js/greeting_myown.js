const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");



function saveUsername(username){
    localStorage.setItem("name", username);
}

function paintGreeting(username){
    localStorage.getItem("name");
    greeting.innerText = `Hello, ${username}`;
    loginForm.classList.add("hidden");
    todoForm.classList.remove("hidden");
}

function handleLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    saveUsername(userName);
    paintGreeting(userName);
    loginForm.classList.add("hidden");
    todoForm.classList.remove("hidden");
}
const savedUsername = localStorage.getItem("name");

if(savedUsername){
    paintGreeting(savedUsername);
}else{
    loginForm.classList.remove("hidden");
    todoForm.classList.add("hidden");
}


loginForm.addEventListener("submit", handleLoginSubmit);
