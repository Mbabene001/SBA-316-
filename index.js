document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const todoItemTemplate = document.getElementById('todo-item-template');
  
    // Sample array of todo items
    const todoItemsArray = ['Learn JavaScript', 'Build a Todo App', 'Practice coding', 'Let it be' ];
  
    // Add Todo
    todoForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
      }
    });
  
    function addTodoItem(text) {
      // Clone the todo item template
      const clonedTemplate = todoItemTemplate.content.cloneNode(true);
      const todoItem = clonedTemplate.querySelector('.todo-item');
      
      // Set text content
      todoItem.textContent = text;
      
      // Add click event listener to toggle completed class
      todoItem.addEventListener('click', function () {
        this.classList.toggle('completed');
      });
  
      // Append the todo item to the todo list
      todoList.appendChild(clonedTemplate);
    }
  
    // Iterate over the array of todo items and add them to the todo list
    todoItemsArray.forEach(function (todoText) {
      addTodoItem(todoText);
    });
  });
  