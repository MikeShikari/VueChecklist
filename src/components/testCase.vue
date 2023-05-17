<template>
    <div>
<div class="case-container">
        <div class="case-title-container">
            <div class="row">
                <h2>{{index+1}}. </h2>
                <input type="text" v-model="titleC" @change="changeTitle" @click.prevent.stop="">
                <font-awesome-icon @click.prevent.stop="openModal" icon="fa-solid fa-xmark" class="delete-icon"/>
                <confirmModal :class="this.showModal ? 'disp':'nodisp'" text1="Отмена" text2="Удалить" text0="Тест-кейс из чек-листа будет удален без возможности восстановления" header="Удалить тест-кейс?" :action1="closeModal" :action2="del"/>
            </div>
        <!-- <h2>{{ title }}</h2> -->
        <b>Описание:</b> <textarea @click.prevent.stop="" @change="changeDescription" type="text" v-model="descriptionC"> </textarea> 
    </div>
    <div class="case-dropdown-container">
       <defaultDropdown @changePriority="changePriority" :priorityProp="priorityC"/>
    </div>
</div>
<div class="border"></div>
    </div>
    
    
</template>


<script>
import defaultDropdown from './defaultDropdown.vue';
import confirmModal from './confirmModal.vue';
export default {
    name: 'testCase',
    components: {defaultDropdown, confirmModal},
    props: {
        title: {
            type: String
        },
        index:{
            type:Number
        },
        description: {
            type: String
        },
        priority:{
            type: String
        }
        
    },
    methods:{
        del(){
          this.$emit('del')  
        },
        changePriority(newValue){
            this.priorityC = newValue
            this.$emit('updatePriority', this.priorityC)
        },
        changeTitle(){
            this.$emit('updateTitle', this.titleC)
        },
        changeDescription(){
            this.$emit('updateDescription', this.descriptionC)
        },
        closeModal(){
            this.showModal = false
        },
        openModal(){
            this.showModal = true
        },
    },
    data(props){
        return {
            showModal:false,
            priorityC: props.priority,
            titleC: props.title,
            descriptionC: props.description
        }
    },
   
       
       

}
</script>

<style scoped>
.border{
    width: 100%;
    height:1px;
    background-color: #2c3e50;
    margin-bottom: 3vh;
}
textarea{
    background: transparent;
    border: none;
    outline: none;
    font-family: inherit;
    width: 100%;
    height:5vh;
    margin-bottom: 1.5vh;
    resize: none;
    
}
textarea:focus{
    background: transparent;
    border: none;
    outline: none;
}
input{
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    margin-top: 1.5vh;
    font-family: inherit;
    margin-bottom: 1.5vh;
    resize: none;
    font-size: 1.5em;
    font-weight: bold;

    
}
input:focus{
    background: transparent;
    border: none;
    outline: none;
}
.nodisp{
    display: none;
}
.disp{
    display: flex;
}
.case-title-container{
    display: flex;
    flex-direction: column;
    align-items: start;
    
}
.case-container{
    display: flex;
    flex-direction: row;
    align-content: space-between;
    width: 100%;
}
.delete-icon{
    height: 2vh;
    position: absolute;
    right: -50vh;
    width:2vh;
    transition:0.3s ease all
}
.delete-icon:hover{
    color:#F0202D;
    transition:0.3s ease all
}
.row{
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    width: 50%;
}
.case-dropdown-container{
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 50%;
}
</style>