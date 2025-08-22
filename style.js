// Get HTML elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add a new task
addBtn.addEventListener("click", function() {
    const task = input.value; // get text from input
    if (task === "") return; // do nothing if empty

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = task;

    // Add a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn); // add delete button to li
    taskList.appendChild(li); // add li to list

    input.value = ""; // clear input
});
