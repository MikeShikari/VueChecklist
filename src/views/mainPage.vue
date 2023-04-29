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
body {
    padding: 0;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    background-color: #EAECF2;
    transition: 0.5s ease all
}

button.primary {
    border-radius: 12px;
    color: #EAECF2;
    width: 150px;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    transition: 0.5s ease all;
    height: 40px;
    background-color: #2F68B5;
    border: none;
}

button.primary:hover {
    box-shadow: 0px 4px 30px rgba(47, 104, 181, 0.3)
}

button.success {
    border: none;
    width: 150px;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    transition: 0.5s ease all;
    height: 40px;
    border-radius: 12px;
    color: #EAECF2;
    background-color: #00DB8C;
}

button.success:hover {
    box-shadow: 0px 4px 30px rgba(0, 219, 140, 0.3)
}

.primary-bg {
    background-color: #2F68B5;
    color: #FFFFFF;
    transition: 0.5s ease all
}

.card-style {
    background-color: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    transition: 0.5s ease all
}

.card-style:hover {
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.20);
    transition: 0.5s ease all
}

.card-holder {
    margin: 15px;
    display: flex
}
</style>