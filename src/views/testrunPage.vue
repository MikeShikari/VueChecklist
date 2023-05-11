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

                
               
               
            
            
        </div>
    </div>
</template>

<script>
import checkBox from '../components/checkbox.vue'
import testruns from '../components/testruns.vue'
import navBar from '../components/navBar.vue'
export default {
    name: 'testrunPage',
    components:{navBar, checkBox, testruns},
    methods:{
        updateCheckBoxN: function( newValue){
            this.checkedN = newValue
        },
        updateCheckBoxS: function( newValue){
            this.checkedS = newValue
        },
        updateCheckBoxNe: function( newValue){
            this.checkedNe = newValue
        },
        updateCheckBoxF: function( newValue){
            this.checkedF = newValue
        },
        updateCheckBoxFl: function( newValue){
            this.checkedFl = newValue
        }
    },
    data(){
        return{
            checkedN: false,
            checkedS:false,
            checkedF:false,
            checkedFl:false,
            checkedNe:false,
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
                            priority:'Normal',
                            description: 'Выбрать определенное подразделение. Акция должна работать на выбранном подразделении и не работать на остальных.'
                        },
                    ],
                   
                },
                {
                    title: 'Акции часть 2',
                    cases: [
                        {
                            title: 'Название акции на сайте',
                            priority:'Highest',
                            description: 'Название должно отображаться в интерфейсе проверки'
                        },
                        {
                            title: 'Описание действия акции на сайте',
                            priority:'Normal',
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