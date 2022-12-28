buttonAddTask.onclick = function(){
    let inp = document.getElementById('inputTask').value;
    document.getElementById('inputTaskText').innerHTML = inp;
    document.getElementById('inputTask').value = '';
}