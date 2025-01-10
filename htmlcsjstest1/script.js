document.getElementById('add-btn').addEventListener('click', () => {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
  
    if (todoText) {
      const todoList = document.getElementById('todo-list');
  
      // Create a new todo item
      const todoItem = document.createElement('li');
      todoItem.className = 'todo-item';
  
      const todoSpan = document.createElement('span');
      todoSpan.textContent = todoText;
  
      // Delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        todoList.removeChild(todoItem);
      });
  
      // Append span and button to todo item
      todoItem.appendChild(todoSpan);
      todoItem.appendChild(deleteBtn);
  
      // Append todo item to the list
      todoList.appendChild(todoItem);
  
      // Clear input
      todoInput.value = '';
    }
  });