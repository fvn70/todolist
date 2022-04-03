let chk = document.getElementsByClassName('check');
let span = document.getElementsByClassName('task');
for (let i = 0; i < chk.length; i++) {
    chk[i].addEventListener('click', function () {
        if (chk[i].checked) {
            span[i].style.textDecoration = 'line-through';
        } else {
            span[i].style.textDecoration = 'none';
        }
    })
}

function delTask(obj) {
    // alert('Delete task ' + obj.parentNode.nodeName);
    obj.parentNode.remove();
}

function addTask() {
    let task = document.getElementById('input-task');
    crtTask(task.value);
    task.value = "";
}

function crtTask(text) {
    let liE = document.createElement('li');
    document.getElementById('task-list').appendChild(liE);
    let inputE = document.createElement('input');
    inputE.setAttribute('class', 'check');
    inputE.setAttribute('type', 'checkbox');
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
