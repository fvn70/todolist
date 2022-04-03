let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
loadData();

let chk = document.getElementsByClassName('check');
let span = document.getElementsByClassName('task');
for (let i = 0; i < chk.length; i++) {
    chk[i].addEventListener('click', function () {
        if (chk[i].checked) {
            span[i].style.textDecoration = 'line-through';
        } else {
            span[i].style.textDecoration = 'none';
        }
        saveData();
    })
}

function saveData() {
    taskList = []
    for (let i = 0; i < span.length; i++) {
        let task = { 'text': span[i].innerHTML, 'chk': chk[i].checked }
        taskList[i] = task;
    }
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

function loadData() {
    for (i in taskList) {
        let task = taskList[i];
        crtTask(task.text, task.chk);
    }
}

function delTask(obj) {
    // alert('Delete task ' + obj.parentNode.nodeName);
    obj.parentNode.remove();
    saveData();
}

function addTask() {
    let task = document.getElementById('input-task');
    crtTask(task.value);
    task.value = "";
    saveData();
}

function crtTask(text, chk) {
    let liE = document.createElement('li');
    document.getElementById('task-list').appendChild(liE);
    let inputE = document.createElement('input');
    inputE.setAttribute('class', 'check');
    inputE.setAttribute('type', 'checkbox');
    inputE.checked = chk;
    liE.appendChild(inputE);
    let spanE = document.createElement('span');
    spanE.setAttribute('class', "task");
    spanE.innerText = text;
    liE.appendChild(spanE)
    spanE = document.createElement('span');
    spanE.setAttribute('class', "space");
    liE.appendChild(spanE)
    let btnE = document.createElement('button');
    btnE.setAttribute('class', "delete-btn");
    btnE.setAttribute('onclick', "delTask(this)");
    btnE.innerText = 'x';
    liE.appendChild(btnE)
}
