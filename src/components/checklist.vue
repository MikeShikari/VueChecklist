<template>
    <div :class="this.active ? 'checklist-opened card-style' : 'checklist-closed card-style'" @click="activateChecklist">
        <input type="text" @click.prevent.stop="" :value="title" :disabled="this.active ? false : true">
        <div :class="this.active ? 'cases-shown' : 'cases-hidden'">
            <div v-for="item of this.casesData" :key="item.title" class="case">
                <testCase :title="item.title" :description="item.description" />
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
            casesData: props.cases
        }
    },
    methods: {
        activateChecklist() {
            this.active = !this.active
        },
        addCase(){
            this.casesData.push({
                title: 'Default',
                description: 'Default'
            })
        }
    }

}

</script>

<style scoped>
.btn{
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
    font-size: 1.9em;
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