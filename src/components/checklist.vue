<template>
    <div :class="this.active ? 'checklist-opened card-style' : 'checklist-closed card-style'" @click="activateChecklist">
    <div class="row">
        <input type="text" @click.prevent.stop="" v-model="titleData" :disabled="this.active ? false : true">
        <font-awesome-icon @click.prevent.stop="checklistDel" class="delete-icon" icon="fa-solid fa-trash-can" />

    </div>
        <div :class="this.active ? 'cases-shown' : 'cases-hidden'">
            <div v-for="(item,index) in this.casesData" :key="item.title" class="case">
                
                <testCase :title="item.title" :index="index" @del="firstDel(index)" @updateTitle="updateTitle(index, $event)" @updatePriority="updatePriority(index, $event)" @updateDescription="updateDescription(index, $event)" :priority="item.priority" :description="item.description" />
            </div>
            <button class="primary btn" @click.prevent.stop="addCase"> New case</button>
        </div>

    </div>
</template>

<script>
import testCase from './testCase.vue';
export default {
    name: 'checklist',
    components: { testCase },
    props: {
        title: {
            type: String
        },
        cases: {
            type: Array
        },
        
    },
    data(props) {
        return {
            active: false,
            titleData:props.title,
            casesData: props.cases
        }
    },
    watch:{
        casesData:function(){
            this.updateCases()
        }
    },
    methods: {
        updateCases(){
            this.$emit('updateCases', this.casesData)
        },
        updatePriority(index, newValue){
            this.casesData[index].priority = newValue
        },
        updateTitle(index, newValue ){
            this.casesData[index].title =newValue
        },
        updateDescription(index, newValue){
            this.casesData[index].description =newValue
        },
        checklistDel(){
            this.$emit('delChecklist')
        },
        firstDel( index){
            this.casesData.splice(index, 1)
        },
        activateChecklist() {
            this.active = !this.active
        },
        addCase(){
            this.casesData.push({
                title: 'Default',
                description: 'Default',
                priority:'Normal'
            })
        }
    }

}

</script>

<style scoped>
.row{
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
}
.delete-icon{
    height: 2vh;
    width:2vh;
    transition:0.3s ease all
}
.delete-icon:hover{
    color:#F0202D;
    transition:0.3s ease all
}
.btn{
    margin-top: 4vh;
    height: 3vh;
}
input{
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
    resize: none;
    font-size: 1.7em;
    font-weight: bold;

    
}
input:focus{
    background: transparent;
    border: none;
    outline: none;
}
.case{
    width: 100%;
    height:12vh;
    margin-bottom: 3vh;
}
.checklist-closed {
    width: 80vh;
    opacity: 0.8;
    /* background-color: */
    height: 6vh;
    cursor: pointer;
    display: flex;
    align-items: start;
    margin-top: 3vh;
    padding: 2vh;
    flex-direction: column;
    transition: 0.3s ease all !important
}
.checklist-closed:hover{
    opacity: 1;
}
.checklist-opened:hover{
    opacity: 1
}

.checklist-opened {
    width: 80vh;
    opacity: 0.8;
    height: fit-content;
    cursor: pointer;
    margin-top: 3vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 2vh;
    transition: 0.3s ease all !important
}

.cases-hidden {
    opacity: 0;
    height:0 !important;
    transition: 0.3s ease all;
    display: flex;
    width: 90%;
    flex-direction: column;
    pointer-events: none;
    align-items: start;
}

.cases-shown {
    opacity: 1;
    width: 85%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: start;
    transition: 0.3s ease all
}
</style>