"use strict";

let id = 0;

function getToDoList(inp){
    let ul = document.querySelector('.ulTodo');

    let li = document.createElement('li');
    li.classList.add('liTodo');
    li.id = id;
    id++;
    li.innerHTML = inp;
    ul.append(li);
    return li;
}
    
buttonAddTask.onclick = function(){
    let inp = document.getElementById('inputTask').value;
    console.log(inp);
    getToDoList(inp);
    document.getElementById('inputTaskText').innerHTML = 'Последняя задача: ' + inp;
    document.getElementById('inputTask').value = '';
}


