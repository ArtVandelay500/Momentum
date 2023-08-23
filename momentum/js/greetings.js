const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
function checking(){
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    if(savedUsername == null){
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        greeting.classList.add(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit",onLoginSubmit);
    }else{
        loginForm.classList.add(HIDDEN_CLASSNAME);
        paintGreeting(savedUsername);
    }
}
checking();

function removing(){
    localStorage.clear();
    checking();  
}
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click",removing);