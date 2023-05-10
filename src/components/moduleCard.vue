<template>
    <div class="card-style card" :class="this.active ? 'active' : ''" @click="activate">
        <h1>{{ title }}</h1>
        <p>Amount of checklists: {{ checklistCount }}</p>
        <p>Total amount of tests: {{ totalTests }}</p>
        <p>Last run: {{ lastRun }}</p>
        <div :class="this.active ? 'actions-block' : 'actions-block-hidden'">
            <router-link to="/checklists">
                <button class="primary">
                    Edit module
                </button>
            </router-link>
            <router-link to="/testrun">

                <button class="success">
                Run tests
            </button>
            </router-link>
            
        </div>
        <div class="percent">
            <p>
                Passed: {{ passedPercentage }}
            </p>
            <apexchart type="pie" width="100" :options="this.chartOptions" :series="this.series" />
        </div>


    </div>
</template>

<script>
export default {
    name: 'moduleCard',
    props: {
        title: {
            type: String
        },
        checklistCount: {
            type: Number
        },
        totalTests: {
            type: Number
        },
        lastRun: {
            type: String
        },
        passed: {
            type: Number
        },
        failed: {
            type: Number
        },
        flaky: {
            type: Number
        }
    },
    data(props) {
        return {
            active: false,
            series: [props.passed, props.failed, props.flaky],
            passedPercentage: `${(props.passed / (props.passed + props.failed + props.flaky)) * 100}%`,
            chartOptions: {
                chart: {
                    width: 100,
                    type: 'pie'
                },
                labels: ['passed', 'failed', 'flaky'],
                stroke: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['#00DB8C', '#F0202D', '#FFCC16'],
                legend: {
                    show: false
                }
            }
        }
    },
    methods: {
        activate() {
            this.active = !this.active
        }
    }

}

</script>


<style>
.actions-block {
    opacity: 1;
    transition: 0.5s ease all;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
}

.actions-block-hidden {
    opacity: 0;
    transition: 0.3s ease all;
    margin-top: 10px;
    display: flex;
    flex-direction: column;

}

.card {
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 12px;
    height: 150px;
    width: 500px;
    color: #140E38;
    position: relative;
    margin-left: 20px;
    padding: 20px;
    margin-right: 20px;
    cursor: pointer;
}

.active {
    height: 300px !important;
}

.card p {
    margin-top: 5px !important;
    margin-bottom: 5px !important
}

.card h1 {
    margin-top: 0 !important
}

.percent p {
    margin: auto !important;
}

.percent {
    color: #9C9DAC;
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    right: 0
}
</style>