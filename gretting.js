const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

function saveName(text){
    localStorage.setItem(USER_Name, text);
}


const USER_Name = "currentUser",
    SHOWING = "showing";

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING); 
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_Name);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init();