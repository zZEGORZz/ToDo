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