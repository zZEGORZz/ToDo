const App = {
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

Vue.createApp(App).mount('#app')