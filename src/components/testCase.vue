<template>
    <div>
<div class="case-container">
        <div class="case-title-container">
        <input type="text" :value="title" @click.prevent.stop="">
        <!-- <h2>{{ title }}</h2> -->
        <b>Описание:</b> <textarea @click.prevent.stop="" type="text" :value="description"> </textarea> 
    </div>
    <div class="case-dropdown-container">
       <defaultDropdown @changePriority="changePriority"/>
    </div>
</div>
<div class="border"></div>
    </div>
    
    
</template>


<script>
import defaultDropdown from './defaultDropdown.vue';
export default {
    name: 'testCase',
    components: {defaultDropdown},
    props: {
        title: {
            type: String
        },
        description: {
            type: String
        },
        
    },
    methods:{
        changePriority(newValue){
            this.priorityC = newValue
        }
    },
    data(){
        return {
            priorityC: 'Normal'
        }
    }

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
.case-title-container{
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 50%;
}
.case-container{
    display: flex;
    flex-direction: row;
    align-content: space-between;
    width: 100%;
}
.case-dropdown-container{
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 50%;
}
</style>