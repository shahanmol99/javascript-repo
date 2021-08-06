var taskListener = document.getElementById('task');
var taskList = document.getElementById('taskList');
var delbtn = document.querySelectorAll('delbtn');

taskListener.addEventListener('keypress', addTask);
taskList.addEventListener('click', deleteTask);
document.addEventListener('DOMContentLoaded', getTasks);

function addTask(e) {
    if(e.keyCode=='13') {
        e.preventDefault();

        if(taskListener.value!="") {
            makeTaskList(taskListener.value);
            saveTasks(taskListener.value);
        }
        taskListener.value = "";
    }
}

function deleteTask(e) {
    var element = e.target;
    
    if(element.classList[0]==='delbtn') {
        var deleteTask = [];
        
        element.parentElement.remove();
        deleteFromLocalStorage(element.parentElement);

        if(localStorage.getItem('deletedTasks')!=null) {
            deletedTasks = JSON.parse(localStorage.getItem('deletedTasks'));
        }
        
        deleteTask.push(element.parentElement.children[0].innerText);
        localStorage.setItem('deletedTasks', JSON.stringify(deleteTask));
    }
}

function saveTasks(task) {
    var tasks = checkLocalStorage();

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    var tasks = checkLocalStorage();

    tasks.forEach(function(task) {
        makeTaskList(task);
    })
}


function checkLocalStorage() {
    if(localStorage.getItem('tasks')===null) {
        var tasks = [];
        return tasks;
    }

    tasks = JSON.parse(localStorage.getItem('tasks'));
    return tasks;
}

function makeTaskList(task) {
    var taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    
    var list = document.createElement("li")
    list.innerText = task;
    list.classList.add("task-name");
    taskDiv.appendChild(list);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = " X ";
    deleteBtn.classList.add("delbtn");
    taskDiv.appendChild(deleteBtn);
    
    taskList.appendChild(taskDiv);
}

function deleteFromLocalStorage(task) {
    var tasks = checkLocalStorage();
    tasks.splice(tasks.indexOf(task.children[0].innerText),1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
//localStorage.clear();