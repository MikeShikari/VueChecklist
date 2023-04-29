<template>
    <div>
        <navBar />
        <div class="card-holder">
            <div v-for="item of this.modules" :key="item.title">
                <moduleCard :title="item.title" :lastRun="item.lastRun" :checklistCount="item.checklistCount"
                    :totalTests="item.totalTests" :passed="item.passed" :failed="item.failed" :flaky="item.flaky" />
            </div>
        </div>
    </div>
</template>

<script>
import navBar from '@/components/navBar.vue';
import moduleCard from '@/components/moduleCard.vue';
export default {
    name: 'MainPage',
    components: { navBar, moduleCard },
    data() {
        return {
            modules: [
                {
                    title: 'Mobile',
                    lastRun: '24-04-2023',
                    checklistCount: 12,
                    totalTests: 100,
                    passed: 73,
                    failed: 17,
                    flaky: 10
                },
                {
                    title: 'Web Desktop',
                    lastRun: '24-04-2023',
                    checklistCount: 12,
                    totalTests: 100,
                    passed: 73,
                    failed: 17,
                    flaky: 10
                }
            ]
        }
    }
}

</script>


<style>

</style>