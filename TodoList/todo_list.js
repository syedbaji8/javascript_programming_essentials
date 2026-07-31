const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

const tasks = [];
function addTask() {
    const user_input_value = taskInput.value;
    tasks.push({text: user_input_value, completed: false})
    displayTasks()
}
addTaskBtn.addEventListener('click', addTask);
function displayTasks() {
    const rendertasks = tasks.map((task, index) => {
        return `<li><input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}">${task.text}</label></li>`;
        
    }).join('');
    taskList.innerHTML = rendertasks;
}