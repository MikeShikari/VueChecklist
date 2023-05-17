<template>
    <div class="container">
        <div class="row">
            
            
        </div>
        <div v-for="item of this.checklistsData" :key="item.title" class="local-container-ez">
            <div class="row costyl">
                <h2 @click="showOrHideCases(item)">{{item.title}}</h2>
                <span>Пройдено тестов: <b>{{countStatuses(item.cases, 'success')}}</b> | Непройдено тестов: <b>{{countStatuses(item.cases, 'failure')}}</b> 
                    | Нужно уточнение по тестам: <b>{{ countStatuses(item.cases, 'flak') }}</b>  | Пропущено тестов: <b>{{countStatuses(item.cases, 'skipped')}}</b></span>
            </div>
            <div v-if="item.shown" class="row aligner">
                <h3>
                Название кейса
            </h3>
            <h3>
                Описание кейса
            </h3>
            <h3>
                Приоритет кейса
            </h3>
            <h3>
                Статус кейса
            </h3>
            </div>
            
            <div v-if="item.shown" v-for="secondItem of item.cases" :key="secondItem.title" class="local-container row" :class="calculateClass(secondItem)">
            <h4>{{secondItem.title}}</h4>
            <p>{{secondItem.description}}</p>
            <disabledDropdown class="priority-aligner" :priorityProp="secondItem.priority" :disabledProp="true"/>
            <div class="row">
                <checkBox class="status-box" typer="Success" :checked="secondItem.success" @checked="this.updateCheckedSuccess(secondItem, $event)" :key="secondItem.title + this.componentKey"/>
                <checkBox class="status-box" typer="Failure" :checked="secondItem.failure" @checked="this.updateCheckedFailure(secondItem, $event)" :key="secondItem.title + this.componentKey" />
                <checkBox class="status-box" typer="Flak" :checked="secondItem.flak" @checked="this.updateCheckedFlak(secondItem, $event)" :key="secondItem.title + this.componentKey" />
                <checkBox class="status-box" typer="Neutral" :checked="secondItem.skipped" @checked="this.updateCheckedSkipped(secondItem, $event)" :key="secondItem.title + this.componentKey" />

            </div>
            </div>
        </div>
        <div class="chartik-box">
            
            <div v-if="this.toRender" class="chartik">
                Прогресс тестирования
                <apexchart  type="pie" width="150" :options="this.chartOptions" :series="[this.countTotal('success'),this.countTotal('failure'), this.countTotal('flak'), this.countTotal('skipped')]" />
            </div>
        </div>
        
    </div>
</template>


<script>
import checkBox from '../components/checkbox.vue'
import disabledDropdown from './disabledDropdown.vue'
export default {
    components:{disabledDropdown, checkBox},
    props:{
        checklists:{
            type: Array
        }
    },
    methods:{
        calculateClass(secondItem){
            if (secondItem.success){
                return 'success-decoration'
            } else if (secondItem.failure){
                return 'failure-decoration'
            } else if (secondItem.flak){
                return 'flak-decoration'
            } else if (secondItem.skipped){
                return ''
            }
        },
        countStatuses(item, key){
            var count=0
            for(let i of item){
                if(i[key] == true){
                    count++
                }
            }
            return count
        },
        countTotal(key){
            var count=0
            for (let i of this.checklistsData){
                var localCount = this.countStatuses(i.cases, key)
                count += localCount
            }
            return count
        },
        showOrHideCases(item){
            if(typeof item.shown =='undefined'){
                item.shown = true
            } else{
                item.shown = !item.shown
            }
            return item.shown
        },
        forceRerender() {
        this.componentKey += 1;
      },
        firstCheck(item){
            if (typeof item.skipped == 'undefined'){
                item.skipped = true
            }
            if (typeof item.success == 'undefined'){
                item.success = false
            }
            if (typeof item.failure == 'undefined'){
                item.failure = false
            }
            if (typeof item.flak == 'undefined'){
                item.flak = false
            }
        },
        updateCheckedSuccess(item, newValue){
            item.success = newValue
            if(item.success == true){
                item.skipped = false
                item.failure = false
                item.flak = false
            }
            this.forceRerender()
        },
        updateCheckedFailure(item, newValue){
            item.failure = newValue
            if(item.failure == true){
                item.skipped = false
                item.success = false
                item.flak = false
            }
            this.forceRerender()
        },
        updateCheckedFlak(item, newValue){
            item.flak = newValue
            if(item.flak == true){
                item.skipped = false
                item.failure = false
                item.success = false
            }
            this.forceRerender()
        },
        updateCheckedSkipped(item, newValue){
            item.skipped = newValue
            if(item.skipped == true){
                item.flak = false
                item.failure = false
                item.success = false
            }
            this.forceRerender()
        }
    },
    created(){
        for(let item of this.checklistsData){
            for(let secondItem of item.cases){
                if (typeof secondItem.skipped == 'undefined'){
                secondItem.skipped = true
            }
            if (typeof secondItem.success == 'undefined'){
                secondItem.success = false
            }
            if (typeof secondItem.failure == 'undefined'){
                secondItem.failure = false
            }
            if (typeof secondItem.flak == 'undefined'){
                secondItem.flak = false
            }
            }
        }
        this.forceRerender()
        
    },
    mounted(){
        this.toRender=true
    },
    data(props){
        return{
            componentKey:0,
            toRender: false,
            chartOptions: {
                chart: {
                    width: 150,
                    type: 'pie'
                },
                labels: ['passed', 'failed', 'flaky', 'skipped'],
                stroke: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['#00DB8C', '#F0202D', '#FFCC16', '#9C9DAC'],
                legend: {
                    show: false
                },
                
            },
            checklistsData:props.checklists,
            
        }
    }
    
}
</script>

<style scoped>
.chartik-box{
    position: relative
}
.chartik{
    position: fixed;
    top: 10vh;
    width: 150px;
    right: 0
}
.success-decoration{
    background-color: #00db8b1e !important;
    border-radius: 12px;
}
.failure-decoration{
    background-color: #f0202e31;
    border-radius: 12px;
}
.flak-decoration{
    background-color: #ffcd1649;
    border-radius: 12px;
}
.status-box{
    margin-right:3vh
}
.aligner{
    margin-left: 30vh; 
}
.priority-aligner{
    margin-left:8.5vh;
    width: 23vh !important;
}
.costyl{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
.container{
    display: flex;
    width: 150vh;
    flex-direction: column;
    align-items: center;
}

p{  
    /* margin-top: 7vh; */
    text-align: start;
    margin-left: 9vh;
    width:25vh!important
}
.local-container{
    width: 100%;
    text-align: start;
    margin-top: 3vh;
    border-bottom: 2px solid #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.local-container-ez{
    width: 100%;
    text-align: start;
    margin-top: 3vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
} 

.row{
    display: flex;
    flex-direction: row;
    padding: 1vh;
    /* justify-content: space-between; */
    align-items: flex-start;
}
span{
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 0.9em;
    color: #9C9DAC;
    
}
h3{
    width: 25vh;
    margin-right: 5vh;
    text-align: start;
}
h4{ 
    /* margin-top: 7vh; */
    text-align: start;
    margin-left: 30vh;
    width:20vh !important

}
h2{
    border-bottom: 2px solid transparent;
    cursor: pointer;
}
h2:hover{
    cursor: pointer;
    border-bottom: 2px solid #2c3e50;
}
    
</style>