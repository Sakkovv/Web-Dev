document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    const inputBox = document.getElementById("New-Task");
    const taskList = document.getElementById("task_list");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        addTask();
    });

    function addTask() {
        const taskText = inputBox.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.classList.add("task-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");

        const titleSpan = document.createElement("span");
        titleSpan.textContent = taskText;
        titleSpan.classList.add("task-text");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-btn");

        checkbox.addEventListener("change", function() {
            titleSpan.classList.toggle("completed", checkbox.checked);
        });

        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        li.append(checkbox, titleSpan, deleteButton);
        taskList.appendChild(li);

        inputBox.value = "";
    }
});
