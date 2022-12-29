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
    if(inp === '')return 1;
    getToDoList(inp);
    document.getElementById('inputTaskText').innerHTML = 'Последняя задача: ' + inp;
    document.getElementById('inputTask').value = '';
    
}

var parent = document.getElementById("ulList");
var child = document.getElementById("delete");
parent.removeChild(child);
