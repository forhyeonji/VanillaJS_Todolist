const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input')
const toDoList = document.getElementById('todo-list');

const TODOS_KEY="todos"

let toDos = [];



const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

const deleteToDo = (e) => {
    const li = e.target.parentElement;
    li.remove();
    // cosole.log(typeof li.id) => String
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


const paintToDo = (newTodoObj) => {

    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    
    const button = document.createElement("button");
    button.innerText="❌"
    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);


    toDoList.appendChild(li);
};

const handleToDoSubmit = (e) => {
    e.preventDefault();
    
    const newTodo=toDoInput.value;
    toDoInput.value='';

    //todo를 object로 저장
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    // JS는 array 에 있는 각각의 item에 대해 function 을 실행할 수 있게 해준다.
    toDos=parseToDos;
    parseToDos.forEach(paintToDo);
}