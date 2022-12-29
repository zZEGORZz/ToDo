"use strict";


let tasks = [
    { task: 'go work' },
    { task: 'go LearnJS' },
    { task: 'go Learn' },
    { task: 'go to work' }
];

buttonAddTask.onclick = function(){
    let inp = document.getElementById('inputTask').value;
    //getToDoList(inp);
    document.getElementById('inputTaskText').innerHTML = inp;
    document.getElementById('inputTask').value = '';
}

function getToDoList(alltask){
    let ul = document.querySelector('.ulTodo');
    
    let liElements = alltask.map((elem) => {
        let li = document.createElement('li');
        li.classList.add('liTodo');
        li.append(elem.task);
        return li;
    })
    return ul.append(...liElements);
}

getToDoList(tasks);

