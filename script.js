let addTodoButton = document.getElementById('addTodo');
let todoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');


addTodoButton.addEventListener('click', function() {
  //add paragraph
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;

  todoContainer.appendChild(paragraph);
  
  inputField.value = "";

  //strike paragraph
  paragraph.addEventListener('click', function() {
    paragraph.style.textDecoration = "line-through";
  })

  //delete paragraph
  paragraph.addEventListener('dblclick', function() {
    todoContainer.removeChild(paragraph);
  })
})