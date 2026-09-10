// Step 1 – Access HTML elements
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");

// Step 2 – Store tasks
const tasks = [];

// Step 3 – Respond to form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = taskInput.value.trim();
    const priority = priorityInput.value;

    if (name === "") {
        alert("Task name cannot be empty.");
        return;
    }

    // Step 4 – Add the task
    const task = {
        name: name,
        priority: priority,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";
    displayTasks();
});

// Step 5 – Display tasks
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        if (task.completed) {
            taskElement.classList.add("completed");
        }

        const priorityClass = `priority-${task.priority}`;

        taskElement.innerHTML = `
            <span>
                <span class="${priorityClass}">[${task.priority}]</span>
                ${task.name}
            </span>
        `;

        // Complete button
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.addEventListener("click", () => {
            task.completed = !task.completed;
            displayTasks();
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            displayTasks();
        });

        taskElement.appendChild(completeBtn);
        taskElement.appendChild(deleteBtn);

        taskList.appendChild(taskElement);
    });
}
