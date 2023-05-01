<template>
    <div>
        <navBar />
        <div class="checklist-holder" >
             <div v-for="item of this.checklists" :key="item.title" >
            <checklist :title="item.title" :cases="item.cases" :priority="item.priority" />
        </div>
        </div>
       
    </div>
</template>

<script>
import navBar from '@/components/navBar.vue';
import checklist from '@/components/checklist.vue';
export default {
    name: 'checklistPage',
    components: { navBar, checklist },
    data() {
        return {
            checklists: [
                {
                    title: 'Mouse1',
                    cases: [
                        {
                            title: 'moose1',
                            description: 'moose moose moose is not elk elk elk'
                        },
                        {
                            title: 'moose2',
                            description: 'mambo jambo'
                        },
                    ],
                    priority: 'minor'
                },
                {
                    title: 'Mouse2',
                    cases: [
                        {
                            title: 'elk',
                            description: 'blablablalbablablablalbablablablalbablablablalbablablablalbablablablalbablablablalba'
                        },
                        {
                            title: 'elkus',
                            description: ''
                        },
                    ],
                    priority: 'minor'
                },
            ]
        }
    }

}

</script>

<style>
.checklist-holder{
    /* margin:auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 0px
}
</style>