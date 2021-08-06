//Model

function getDataFromLocalStorage() {
    if(localStorage.getItem('tasks')===null) {
        var taskArr = [];
        return taskArr;
    }

    var taskArr = JSON.parse(localStorage.getItem('tasks'));
    return taskArr;
}

function saveNewTaskToLocalStorage(taskName) {
    task = {}
    task.id = Date.now();
    task.name = taskName;
    task.createdTime = moment.utc();
    task.isDeleted = false;

    var taskArr = getDataFromLocalStorage();

    //console.log(taskArr);
    taskArr.push(task);
    localStorage.setItem('tasks',JSON.stringify(taskArr));
}

function deleteFromLocalStorage(taskName) {
    var taskArr = getDataFromLocalStorage();

    for(var i=0;i<taskArr.length;i++) {
        if(taskArr[i].isDeleted==false && taskArr[i].name==taskName) {
            console.log(taskName);
            taskArr[i].isDeleted = true;
        }
    }

    localStorage.setItem('tasks',JSON.stringify(taskArr));
}



//View

function renderHTML(task, duration) {
    var taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    
    var list = document.createElement("li")
    list.innerText = task+"     ..."+duration;
    list.classList.add("task-name");
    taskDiv.appendChild(list);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = " X ";
    deleteBtn.classList.add("delbtn");
    taskDiv.appendChild(deleteBtn);
    
    taskList.appendChild(taskDiv);
}

function deleteHTMLElement(element) {
    element.remove();
}



//Controller

var taskListener = document.getElementById('task');
var taskList = document.getElementById('taskList');
var delbtn = document.querySelectorAll('delbtn');

taskListener.addEventListener('keypress', addTask);
taskList.addEventListener('click', deleteTask);
document.addEventListener('DOMContentLoaded', loadDOM);


function addTask(e) {
    if(e.keyCode=='13') {
        e.preventDefault();

        if(taskListener.value!="") {
            var duration = moment.duration(1, 'seconds').humanize();
            renderHTML(taskListener.value, duration);
            saveNewTaskToLocalStorage(taskListener.value);
        }
        taskListener.value = "";
    }
}

function loadDOM() {
    var taskArr = getDataFromLocalStorage();
    for(var i=0;i<taskArr.length;i++) {
        if(taskArr[i].isDeleted==false) {
            renderHTML(taskArr[i].name, moment(taskArr[i].createdTime).fromNow());
        }
    }
}

function deleteTask(e) {
    var element = e.target;
    if(element.classList[0]=='delbtn') {
        deleteHTMLElement(element.parentElement);
        deleteFromLocalStorage(element.parentElement.children[0].innerText);
    }
}
