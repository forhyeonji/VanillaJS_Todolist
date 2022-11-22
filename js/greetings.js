const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

function onLoginSubmit(e){

    e.preventDefault();
    console.log(e);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(e){
//     e.preventDefault();
//     console.log(e);
// }

const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}

// link.addEventListener("click", handleLinkClick);