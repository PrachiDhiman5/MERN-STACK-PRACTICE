let tasks = [];
let list = document.getElementById('taskList');


function addTask(){
    let input = document.getElementById('taskinput')

    if(input.value === '') return;

    tasks.push(input.value);
    input.value = '';

    showTasks();
}

function showTasks(){
    list.innerHTML = '';
    for(let i=0; i<tasks.length; i++){
        let li = document.createElement("li")
        li.innerText = tasks[i];

        let delBtn = document.createElement("button");
        delBtn.innerText = "X";

        delBtn.onclick = function(){
            tasks.splice(i,1);
            showTasks();
        }

        li.appendChild(delBtn);
        list.appendChild(li);
    }
}
