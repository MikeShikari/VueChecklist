<template>
    <div>
        <navBar/>
        <div class="checklist-holder">
            <div class="row">
                <div>
                    <h3>Введите название ветки / конкретного тестирования:</h3>
            <input type="text"> 
                </div>
               
            </div>
            
        </div>
    </div>
</template>

<script>
import navBar from '../components/navBar.vue'

export default {
    name: 'testrunPage',
    components:{navBar},
    data(){
        return{
            checklists: [
                {
                    title: 'Mouse1',
                    cases: [
                        {
                            title: 'moose1',
                            priority:'Normal',
                            description: 'moose moose moose is not elk elk elk'
                        },
                        {
                            title: 'moose2',
                            priority:'Normal',
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

<style scoped>
.row{
    display: flex;
    flex-direction: row;
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