const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  todoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
function paintToDo(text) {
  console.log(text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentvalue = toDoInput.value;
  paintToDo(currentvalue);
}

function loadToDo() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
