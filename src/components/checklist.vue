<template>
    <div :class="this.active ? 'checklist-opened card-style' : 'checklist-closed card-style'" @click="activateChecklist">
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
    width: 80vh;
    /* background-color: */
    height: 6vh;
    cursor: pointer;
    transition: 0.3s ease all
}

.checklist-opened {
    width: 80vh;
    height: fit-content;
    cursor: pointer;
    transition: 0.3s ease all
}

.cases-hidden {
    opacity: 0;
    transition: 0.3s ease all;
}

.cases-shown {
    opacity: 1;
    margin-left: 75px;
    transition: 0.3s ease all
}
</style>