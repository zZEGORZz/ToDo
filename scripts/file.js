"use strict";


function getToDoList(inp){
    let ul = document.querySelector('.ulTodo');

    let li = document.createElement('li');
    li.classList.add('liTodo');
    let but = document.createElement('button');
    but.classList.add('liTodo', 'butt');
    li.innerHTML = inp;
    but.innerText = 'Удалить';
    but.onclick = () => {
        li.remove();
        but.remove();
    }
    ul.append(li, but);
    return li;
}
    
buttonAddTask.onclick = function(){
    let inp = document.getElementById('inputTask').value;
    if(inp === '')return 1;
    getToDoList(inp);
    document.getElementById('inputTaskText').innerHTML = 'Последняя задача: ' + inp;
    document.getElementById('inputTask').value = '';
    
}

function deleteById(parentId, childId){
    var parent = document.getElementById(parentId);
    var child = document.getElementById(childId);
    parent.removeChild(child);
}

deleteById('ulList', 'delete');
