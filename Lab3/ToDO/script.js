document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    const inputBox = document.getElementById("New-Task");
    const taskList = document.getElementById("task_list");

    const modal = document.getElementById("confirmModal");
    const confirmText = document.getElementById("confirmText");
    const confirmYes = document.getElementById("confirmYes");
    const confirmNo = document.getElementById("confirmNo");
    const deleteSelectedBtn = document.getElementById("delete-selected");
    const deleteAllBtn = document.getElementById("delete-all");


    let confirmCallback = null;

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
        deleteButton.innerHTML = "&#10006;";
        deleteButton.classList.add("delete-btn");

        checkbox.addEventListener("change", function() {
            titleSpan.classList.toggle("completed", checkbox.checked);
        });

        deleteButton.addEventListener("click", function() {
            showConfirm("Вы действительно хотите удалить эту задачу?", function() {
                li.remove();
            });
        });

        li.append(checkbox, titleSpan, deleteButton);
        taskList.appendChild(li);
        inputBox.value = "";
    }

    document.querySelector(".btn2").addEventListener("click", function() {
        if (taskList.children.length === 0) {
            alert("Список задач уже пуст!");
            return;
        }
        showConfirm("Вы уверены, что хотите удалить все задачи?", function() {
            taskList.innerHTML = "";
        });
    });

    function showConfirm(message, callback) {
        confirmText.textContent = message;
        modal.style.display = "flex";
        confirmCallback = callback;
    }

    confirmYes.addEventListener("click", function() {
        if (confirmCallback) confirmCallback();
        closeModal();
    });

    confirmNo.addEventListener("click", closeModal);

    function closeModal() {
        modal.style.display = "none";
        confirmCallback = null;
    }

    deleteSelectedBtn.addEventListener("click", function() {
        const selectedTasks = document.querySelectorAll(".task-checkbox:checked");
        if (selectedTasks.length === 0) {
            alert("Ни одна задача не выделена!");
            return;
        }

        showConfirm("Вы уверены, что хотите удалить выбранные задачи?", function() {
            selectedTasks.forEach(checkbox => {
                checkbox.parentElement.remove();
            });
        });
    });

    deleteAllBtn.addEventListener("click", function() {
        if (taskList.children.length === 0) {
            alert("Список задач уже пуст!");
            return;
        }

        showConfirm("Вы уверены, что хотите удалить все задачи?", function() {
            taskList.innerHTML = "";
        });
    });

});
