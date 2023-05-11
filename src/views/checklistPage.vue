<template>
    <div>
        <navBar />
        <button class="save-changes primary">Save changes</button>
        <div class="checklist-holder" >
             <div v-for="(item, index) in this.checklists" :key="item.title" >
            <checklist :title="item.title" @delChecklist="deleteChecklist(index)" @updateCases="updateCases(index, $event)" :cases="item.cases" :priority="item.priority" />
        </div>
        <button class="primary" @click="newChecklist">New checklist</button>
        </div>
       
    </div>
</template>

<script>
import navBar from '@/components/navBar.vue';
import checklist from '@/components/checklist.vue';
export default {
    name: 'checklistPage',
    components: { navBar, checklist },
    methods:{
        updateCases(index, newValue){
            this.checklists[index] = newValue;
        },
        deleteChecklist(index){
            this.checklists.splice(index, 1)
        },
        newChecklist(){
            this.checklists.push({
                title:'Default',
                cases:[]
            })
        }
    },
    props:{
        checklistsProps:{
            type: Object
        }
    },
    data() {
        return {
            checklists: [
                {
                    title: 'Mouse1',
                    cases: [
                        {
                            title: 'moose1',
                            priority:'High',
                            description: 'moose moose moose is not elk elk elk'
                        },
                        {
                            title: 'moose2',
                            priority:'Highest',
                            description: 'mambo jambo'
                        },
                    ],
                   
                },
                {
                    title: 'Mouse2',
                    cases: [
                        {
                            title: 'elk',
                            priority:'Normal',
                            description: 'blablablalbablablablalbablablablalbablablablalbablablablalbablablablalbablablablalba'
                        },
                        {
                            title: 'elkus',
                            priority:'Normal',
                            description: ''
                        },
                    ],
                    
                },
            ]
        }
    }

}

</script>

<style>
.save-changes{
    position: fixed;
    right: 10vh;
    top: 7vh
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