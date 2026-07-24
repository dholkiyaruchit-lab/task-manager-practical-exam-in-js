# 📝 Task Manager

<img width="1920" height="989" alt="image" src="https://github.com/user-attachments/assets/348e92a6-7a46-49f5-87d0-2ba8ef25bc07" />

A simple **Task Manager Web Application** built using **HTML, CSS, Bootstrap, and JavaScript**. It allows users to create and manage daily tasks easily.

## 🚀 Features

* ➕ Add new tasks
* ✏️ Edit existing tasks
* 🗑️ Delete tasks
* ✅ Mark tasks as completed or pending
* 🔍 Search tasks by title or description
* 🎯 Filter tasks by:

  * All
  * Completed
  * Pending
* 📊 Task counter

  * Total Tasks
  * Completed Tasks
  * Pending Tasks
* 🧹 Clear all tasks
* 💾 Store tasks using Local Storage

## 🛠️ Technologies Used

* HTML5
* Bootstrap 5
* JavaScript
* Local Storage

## 📁 Project Structure

Task-Manager/
│
├── index.html
├── script.js
└── README.md
```

## ⚙️ How It Works

1. Enter the **Task Title**.
2. Select the **Task Date**.
3. Enter a **Task Description**.
4. Click **Save Task**.
5. The task will appear in the task table.
6. Use **Done/Pending** to change task status.
7. Use **Edit** to update a task.
8. Use **Delete** to remove a task.
9. Use the search box to quickly find tasks.
10. Tasks remain saved after refreshing the page using browser Local Storage.

## 💾 Local Storage

Task data is stored inside the browser using:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

Stored data is loaded using:

```javascript
JSON.parse(localStorage.getItem("tasks")) || [];
```

This means the application does not require a database.

## 📚 JavaScript Concepts Used

* Variables
* Functions
* Arrays
* Objects
* Loops
* `filter()`
* `map()`
* `find()`
* DOM Manipulation
* Event Handling
* Template Literals
* Local Storage
* JSON

## 🎯 Purpose

This project was created to practice **JavaScript DOM manipulation, CRUD operations, filtering, searching, and Local Storage**.

## 👨‍💻 Author

**Ruchit**
