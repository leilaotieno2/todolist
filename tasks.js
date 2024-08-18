document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Enable/disable submit button based on input field
    newTaskInput.addEventListener('input', () => {
        submitBtn.disabled = newTaskInput.value.trim() === '';
    });

    // Handle form submission
    document.getElementById('task-form').addEventListener('submit', (event) => {
        event.preventDefault();

        // Create list item for new task
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        // Append delete button to list item
        listItem.appendChild(deleteBtn);

        // Add list item to task list
        taskList.appendChild(listItem);

        // Clear input field and disable submit button
        newTaskInput.value = '';
        submitBtn.disabled = true;
    });

    return false; // Prevent default form submission
});
