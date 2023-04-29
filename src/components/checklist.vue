<template>
    <div :class="this.active ? 'checklist-opened' : 'checklist-closed'">
        <h2>
            {{ title }}
        </h2>
        <div :class="this.active ? 'cases-shown' : 'cases-hidden'">
            <div v-for="item of this.casesData" :key="item.title">
                <testCase :title="item.title" :description="item.description" />
            </div>
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
        priority: {
            type: String
        }
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
        }
    }

}

</script>

<style>
.checklist-closed {
    width: 80%;
    height: 6vh;
    cursor: pointer
}

.checklist-opened {
    width: 80%;
    height: fit-content;
    cursor: pointer
}

.cases-hidden {
    opacity: 0;
}

.cases-shown {
    opacity: 1;
    margin-left: 75px
}
</style>