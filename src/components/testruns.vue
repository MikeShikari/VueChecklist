<template>
    <div class="container">
        <div class="row">
            <h1>
                Название чеклиста
            </h1>
            <h1>
                Название кейса
            </h1>
            <h1>
                Описание кейса
            </h1>
            <h1>
                Приоритет кейса
            </h1>
            <h1>
                Статус кейса
            </h1>

        </div>
        <div v-for="item of this.checklistsData" :key="item.title" class="local-container">
            <h2>{{item.title}}</h2>
            <div v-for="secondItem of item.cases" :key="secondItem.title" class="local-container row">
            <h4>{{secondItem.title}}</h4>
            <p>{{secondItem.description}}</p>
            <disabledDropdown class="priority-aligner" :priorityProp="secondItem.priority" :disabledProp="true"/>
            <div class="row aligner">
                <checkBox class="status-box" typer="Success" :checked="secondItem.success" @checked="this.updateCheckedSuccess(secondItem, $event)" :key="secondItem.title + this.componentKey"/>
                <checkBox class="status-box" typer="Failure" :checked="secondItem.failure" @checked="this.updateCheckedFailure(secondItem, $event)" :key="secondItem.title + this.componentKey" />
                <checkBox class="status-box" typer="Flak" :checked="secondItem.flak" @checked="this.updateCheckedFlak(secondItem, $event)" :key="secondItem.title + this.componentKey" />
                <checkBox class="status-box" typer="Neutral" :checked="secondItem.skipped" @checked="this.updateCheckedSkipped(secondItem, $event)" :key="secondItem.title + this.componentKey" />

            </div>
                
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
        forceRerender() {
            console.log('FORCED')
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
    mounted(){
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
    data(props){
        return{
            componentKey:0,
            checklistsData:props.checklists
        }
    }
    
}
</script>

<style scoped>
.status-box{
    margin-right:3vh
}
.aligner{
    /* margin-top: 6vh; */
}
.priority-aligner{
    margin-left:7vh;
    width: 27vh !important;
}
.container{
    display: flex;
    width: 150vh;
    flex-direction: column;
    align-items: flex-start;
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.row{
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: flex-start;
}
h1{
    width: 25vh;
    margin-right: 5vh;
    text-align: start;
}
h4{ 
    /* margin-top: 7vh; */
    text-align: start;
    margin-left: 31vh;
    width:20vh !important

}
    
</style>