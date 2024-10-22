// script.js
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = taskInput.value;
  
      // Create 'Remove' button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', function() {
        taskList.removeChild(li);
      });
  
      // Add task completion toggle
      li.addEventListener('click', function() {
        li.classList.toggle('completed');
      });
  
      li.appendChild(removeBtn);
      taskList.appendChild(li);
      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
  });
  