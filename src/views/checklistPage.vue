<template>
    <div>
        <navBar />
        <div v-for="item of this.checklists" :key="item.title">
            <checklist :title="item.title" :cases="item.cases" :priority="item.priority" />
        </div>
    </div>
</template>

<script>
import navBar from '@/components/navBar.vue';
import checklist from '@/components/checklist.vue';
export default {
    name: 'checklist',
    components: { navBar, checklist },
    data() {
        return {
            checklists: [
                {
                    title: 'Mouse1',
                    cases: [
                        {
                            titleC: 'moose1',
                            description: 'moose moose moose is not elk elk elk'
                        },
                        {
                            titleC: 'moose2',
                            description: 'mambo jambo'
                        },
                    ],
                    priority: 'minor'
                },
                {
                    title: 'Mouse2',
                    cases: [
                        {
                            titleC: 'elk',
                            description: 'blablablalbablablablalbablablablalbablablablalbablablablalbablablablalbablablablalba'
                        },
                        {
                            titleC: 'elkus',
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

<style></style>