let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let filterType = "all";

displayTasks();

function addTask() {
  let id = document.getElementById("taskId").value;
  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let description = document.getElementById("description").value;

  if ((title == "") || (date == "")) {
    alert("Please fill all fields");
    return;
  }

  if (id == "") {
    let task = {
      id: Date.now(),
      title: title,
      description: description,
      date: date,
      completed: false,
    };

    tasks.push(task);
  } else {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == id) {
        tasks[i].title = title;
        tasks[i].description = description;
        tasks[i].date = date;
      }
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));

  clearForm();

  displayTask();
}

function displayTasks() {
  let taskList = document.getElementById("taskList");

  taskList.innerHTML = "";

  let search = document.getElementById("search").value.toLowerCase();

  let showTasks = tasks.filter(function (task) {
    let matchSearch =
      task.title.toLowerCase().includes(search) ||
      task.description.toLowerCase().includes(search);

    if (filterType == "completed") {
      return task.completed && matchSearch;
    }

    if (filterType == "pending") {
      return !task.completed && matchSearch;
    }

    return matchSearch;
  });

  if (showTasks.length == 0) {
    taskList.innerHTML = `
        <tr>
            <td colspan="6" class="empty">
                No Tasks Found
            </td>
        </tr>
        `;

    updateCounter();
    return;
  }

  showTasks.forEach(function (task) {
    taskList.innerHTML += `
        <tr>
            <td>
                <button
                class="btn ${task.completed ? "btn-success" : "btn-secondary"} btn-sm"
                onclick="toggleStatus(${task.id})">
                ${task.completed ? "Done" : "Pending"}
                </button>
            </td>
            <td class="${task.completed ? "task-complete" : ""}">
                ${task.title}
            </td>
            <td class="${task.completed ? "task-complete" : ""}">
                ${task.description}
            </td>
            <td>
                ${task.date}
            </td>
            <td>
               <button
                class="btn btn-warning btn-sm"
                onclick="editTask(${task.id})">
                Edit
                </button>
            </td>
            <td>
                <button
                class="btn btn-danger btn-sm"
                onclick="deleteTask(${task.id})">
                Delete
                </button>
            </td>
        </tr>

        `;
  });

  updateCounter();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
}

function deleteTask(id) {
  let check = confirm("Delete Task?");

  if (check) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == id) {
        tasks.splice(i, 1);

        break;
      }
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask();
  }
}

function editTask(id) {
  let task = tasks.find(function (task) {
    return task.id == id;
  });

  document.getElementById("taskId").value = task.id;
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("date").value = task.date;
}

function toggleStatus(id) {
  tasks = tasks.map(function (task) {
    if (task.id == id) {
      task.completed = !task.completed;
    }

    return task;
  });

  saveTasks();
}

function searchTask() {
  displayTasks();
}

function filterTask(type) {
  filterType = type;

  displayTasks();
}

function updateCounter() {
  let total = tasks.length;

  let completed = tasks.filter(function (task) {
    return task.completed;
  }).length;

  let pending = total - completed;

  document.getElementById("totalTask").innerHTML = "Total : " + total;

  document.getElementById("completedTask").innerHTML =
    "Completed : " + completed;

  document.getElementById("pendingTask").innerHTML = "Pending : " + pending;
}

function clearAll() {
  let check = confirm("Delete all tasks?");

  if (!check) return;

  tasks = [];

  saveTasks();
}

function clearForm() {
  document.getElementById("taskId").value = "";
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
}
