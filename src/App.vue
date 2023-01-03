<template>
    <!-- eslint-disable -->
  <div class="header">
        <div class="container">
            <div class="logo">Задачи</div>
            <input 
                id="inputTask" 
                type="text" 
                placeholder="Введите задачу" 
                :value="inputValue" 
                @input="inpValueNow"
                @keypress.enter="addTask"
            >
            <input id="buttonAddTask" type="button" value="Добавить" @click="addTask">
        </div>
    </div>
    <ul>
        <li v-for="(elem, indexElem) in listTasks" :key="indexElem.id"> {{ elem }} 
            <div>
                <button class="btn btn2" @click="deleteTask(indexElem)">Удалить</button>
            </div>
        </li>
    </ul>
    <div v-if="listTasks.length" class="sumTasks">
        <hr>
        <div>Всего заметок: {{ listTasks.length }}</div>
    </div>
</template>

<script>
export default {
  data() {
        return{
            inputValue: '',
            listTasks: []
        }
    },  
  methods: {
        addTask(){
            if(this.inputValue !== ''){
                this.listTasks.push(this.inputValue);
                this.inputValue = '';
            }
        },
        inpValueNow(event){
            this.inputValue = event.target.value;
        },
        deleteTask(indexElem){
            this.listTasks.splice(indexElem, 1);
        }
  }   
}
</script>

<style>

    html, body {
    margin: 0;
    padding: 0;
    background-color: rgb(255 241 241);
    }

    li{
        list-style-type: none;
        word-wrap: break-word;
        margin-top: 15px;
        margin-bottom: 15px;
        margin-left: 70px;
        margin-right: 102px;
        font-size: 30px;
        background-color: #aaffff;
        padding-bottom: 1px;
        border-radius: 10px;
    }

    .header {
        width: 100%;
        background-color: rgb(153, 0, 255);
        text-align: center;
    }
    
    .header .container .logo {
        font-family: 'Rubik Mono One', sans-serif;
        width: 100px;
        line-height: 42px;
        color: #fff700;
        font-size: 35px;
        cursor: pointer;
        text-shadow: 2px 2px 3px rgba(251, 255, 0, 0.445), -2px -2px 3px rgba(255, 145, 0, 0.445);
        -webkit-text-stroke: 1px #fff700;
        -webkit-text-fill-color: transparent;
        letter-spacing: 5px;
        display: inline;
        margin-right: 5%;
    }
    
    #inputTask{
        background-color: rgb(238, 178, 213);
        width: 35%;
        height: 28px;
        border-radius: 7px;
        font-size: 17px;
        margin-bottom: 7px;
        margin-right: 5px;
    }
    
    #buttonAddTask{
        background-color: rgb(157, 255, 0);
        border-radius: 7px;
        height: 30px; 
        box-shadow: inset 0 0 0 0px #53ea93;
    }

    #buttonAddTask:hover{
        background-color: rgb(157, 255, 0);   
        box-shadow: inset 0 0 0 2px #00ccff;
    }
    
    #inputTaskText{
        text-align: center;
        word-break:break-all;
        margin-left: 102px;
        margin-right: 102px;
        color: rgba(109, 140, 141, 0.781);
    }
    
    .liTodo{
        text-align: center;
        list-style-type: none;
        font-size: 27px;
        word-break:break-all;
    }
    
    .btn{
        width: 70px;
        height: 30px;
        position: relative;
        display: block;
        color: rgb(0, 0, 0);
        font-size: 12px;
        font-family: "montserrat";
        text-decoration: none;
        margin: 7px 0;
        border: 2px solid #ff7675;
        padding: 0px 0px;
        text-transform: uppercase;
        overflow: hidden;
        transition: 1s all ease;
        margin-left: 87%;
        border-radius: 7px;
        background-color: blanchedalmond;
    }
    
    .btn:hover{
        background-color: #ff0000;
        transition-duration: .2s;
    }

    .sumTasks{
        margin-left: 102px;
        margin-right: 102px;
    }
    
  
  </style>