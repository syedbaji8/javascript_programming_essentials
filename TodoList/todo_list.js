const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

let tasks = [];
function addTask() {
    const user_input_value = taskInput.value;
    tasks.push({ text: user_input_value, completed: false })
    displayTasks();
    taskInput.value = ''
    taskInput.focus();
}
addTaskBtn.addEventListener('click', addTask);

function displayTasks() {
    const rendertasks = tasks.map((task, index) => {
        return `<li><input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""} onchange="toggleCheckBox(${index})">
        <label for="task-${index}">${task.text}</label></li>`;

    }).join('');
    taskList.innerHTML = rendertasks;
}

function toggleCheckBox(index) {
    tasks[index].completed = !tasks[index].completed;
    console.log(tasks[index].completed)
}

function clearCompletedFn() {
    tasks = tasks.filter((task) => task.completed === false);
    displayTasks();
}
clearCompletedBtn.addEventListener('click', clearCompletedFn)

function clearAllFn() {
    tasks.splice(0, Infinity)
    displayTasks();
}
clearAllBtn.addEventListener('click', clearAllFn)