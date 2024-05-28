'use strict';

const toDoItem = document.querySelector('#todo-item');
const addBtn = document.querySelector('.add-btn');
const todoList = document.querySelector('.todo-list');

let todoArray = JSON.parse(localStorage.getItem('todoArray ')) || [];

function renderToDoList() {
  todoList.innerHTML = '';

  todoArray.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.classList.add('list-group-item');
    todoList.appendChild(li);

    // Add event listener to remove the item

    li.addEventListener('click', () => {
      todoArray.splice(index, 1);
      updateLocalStorage(); // Update local storage
      renderToDoList();
    });
  });
}

// function to update the local storage

function updateLocalStorage() {
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
}

addBtn.addEventListener('click', () => {
  if (toDoItem.value.trim() !== '') {
    todoArray.push(toDoItem.value.trim());
    updateLocalStorage();
    renderToDoList();
    toDoItem.value = '';
  }
});
