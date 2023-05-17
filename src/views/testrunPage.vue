<template>
    <div>
        <navBar/>
        <div class="checklist-holder">
            <div class="column">
                <h2>Информация о тестировании</h2>
                <div class="row">
                        <h3>Введите название 
                        ветки / конкретного тестирования:</h3>
                        <input v-model="title" type="text"> 
                </div>
            <div class="row">
                
                <h3>Примечание:</h3>
                 <textarea v-model="description"  type="text"> </textarea> 
            </div>
                </div>
                <h2>
                    Чеклисты для прохождения
                </h2>
                <testruns :checklists="checklists" />

                
                <div>
                    <button class="success bttn" @click="openModal"> Complete test run </button>
                    <confirmModal :class="this.showModal ? 'disp':'nodisp'" text1="Сохранить" text2="Отмена" text0="Результаты будут сохранены и добавлены в статистику по тестированию" header="Завершить тестирование?" :action1="closeModal" :action2="closeModal"/>
                    
                    <button class="failure bttn" @click="openModal1"> Cancel test run </button>
                    <confirmModal :class="this.showModal1 ? 'disp':'nodisp'" text1="Прервать" text2="Отмена" text0="Результаты не сохранятся, потребуется повторное тестирование" header="Прервать тестирование?" :action1="closeModal1" :action2="closeModal1"/>
                </div>
                
               
            
            
        </div>
    </div>
</template>

<script>
import checkBox from '../components/checkbox.vue'
import testruns from '../components/testruns.vue'
import confirmModal from '../components/confirmModal.vue';
import navBar from '../components/navBar.vue'
export default {
    name: 'testrunPage',
    components:{navBar, checkBox, testruns, confirmModal},
    methods:{
        closeModal(){
            this.showModal = false
        },
        closeModal1(){
            this.showModal1 = false
        },
        openModal(){
            this.showModal = true
        },
        openModal1(){
            this.showModal1 = true
        },
    },
    data(){
        return{
            showModal:false,
            showModal1:false,
            title: 'Default',
            description:'Default description',
            checklists: [
                {
                    title: 'Акции часть 1',
                    cases: [
                        {
                            title: 'Город действия акции',
                            priority:'Normal',
                            description: 'Выбрать определенный город. Акция должна работать на выбранном городе и не работать на остальных.'
                        },
                        {
                            title: 'Подразделение действия акции',
                            priority:'Low',
                            description: 'Выбрать определенное подразделение. Акция должна работать на выбранном подразделении и не работать на остальных.'
                        },
                    ],
                   
                },
                {
                    title: 'Акции часть 2',
                    cases: [
                        {
                            title: 'Название акции на сайте',
                            priority:'Low',
                            description: 'Название должно отображаться в интерфейсе проверки'
                        },
                        {
                            title: 'Описание действия акции на сайте',
                            priority:'Normal',
                            description: 'Описание должно отображаться в интерфейсе проверки'
                        },
                        {
                            title: 'Описание действия акции на сайте',
                            priority:'High',
                            description: 'Описание должно отображаться в интерфейсе проверки'
                        },
                        {
                            title: 'Описание действия акции на сайте',
                            priority:'Highest',
                            description: 'Описание должно отображаться в интерфейсе проверки'
                        },
                    ],
                    
                },
                {
                    title: 'Акции часть 3',
                    cases: [
                        {
                            title: 'Название акции на сайте',
                            priority:'Highest',
                            description: 'Название должно отображаться в интерфейсе проверки'
                        },
                        {
                            title: 'Название акции на сайте',
                            priority:'High',
                            description: 'Название должно отображаться в интерфейсе проверки'
                        },
                        {
                            title: 'Описание действия акции на сайте',
                            priority:'Normal',
                            description: 'Описание должно отображаться в интерфейсе проверки'
                        },
                    ],
                    
                },
                {
                    title: 'Акции часть 4',
                    cases: [
                        {
                            title: 'Название акции на сайте',
                            priority:'Low',
                            description: 'Название должно отображаться в интерфейсе проверки'
                        },
                        {
                            title: 'Описание действия акции на сайте',
                            priority:'Normal',
                            description: 'Описание должно отображаться в интерфейсе проверки'
                        },
                        {
                            title: 'Описание действия акции на сайте',
                            priority:'High',
                            description: 'Описание должно отображаться в интерфейсе проверки'
                        },
                        {
                            title: 'Описание действия акции на сайте',
                            priority:'Highest',
                            description: 'Описание должно отображаться в интерфейсе проверки'
                        },
                        {
                            title: 'Название акции на сайте',
                            priority:'Low',
                            description: 'Название должно отображаться в интерфейсе проверки'
                        },
                        {
                            title: 'Описание действия акции на сайте',
                            priority:'Normal',
                            description: 'Описание должно отображаться в интерфейсе проверки'
                        },
                        {
                            title: 'Описание действия акции на сайте',
                            priority:'High',
                            description: 'Описание должно отображаться в интерфейсе проверки'
                        },
                        {
                            title: 'Описание действия акции на сайте',
                            priority:'Highest',
                            description: 'Описание должно отображаться в интерфейсе проверки'
                        },
                    ],
                    
                },
            ]
        }
    }
}
</script>

<style scoped>
.bttn{
    margin: 5vh;
    
}
textarea{
    /* background: transparent; */
    /* border: none; */
    /* outline: none; */
    font-family: inherit;
    width: 30%;
    border-radius: 12px;
    height:5vh;
    /* margin-bottom: 1.5vh; */
    resize: none;
    border: none;
    padding: 1vh;
    
}
textarea:focus{
    outline: 2px solid #2F68B5;
}
input{
    width: 30%;
    border-radius: 12px;
    border: none;
    padding: 1vh;
}
input:focus{
    outline: 2px solid #2F68B5;
}
.input-block{
    width: 50%;
}
.nodisp{
    display: none;
}
.disp{
    display: flex;
}
h3{
    margin: 0;
    width: 70%;
}
.column{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.row{
    display: flex;
    margin-top: 5vh;
    flex-direction: row;
    justify-content: space-between;
}
    .checklist-holder{
    /* margin:auto; */
    display: flex;
    margin-top: 5vh;
    flex-direction: column;
    align-items: center;
    flex: 1 1 0px
}
</style>