<template>
    <div class="dropdown-menu">        
            <button @click.prevent.stop="disabledProp ? '' : this.toggle()" class="primary btn" :class="[prioclass, active? 'btn-change': '']">
            {{ priority }}
        </button>
        <div v-if="this.active" class="container" :class="prioclass">
           <div @click.prevent.stop="changePriority('Low')" class="solo-element priority-low" >
            Low
           </div>
           <div @click.prevent.stop="changePriority('Normal')" class="solo-element priority-normal" >
            Normal
           </div>
           <div @click.prevent.stop="changePriority('High')" class="solo-element priority-high" >
            High
           </div>
           <div @click.prevent.stop="changePriority('Highest')" class="solo-element priority-highest" >
            Highest
           </div>
        </div>
        
    </div>
</template>


<script>
export default {
    props:{
        priorityProp:{
            type:String
        },
        disabledProp:{
            type:Boolean,
            default: false
        }
    },
    data(props){
        return{
            active: false,
            priority: props.priorityProp,
            prioclass: ''
        }
    },
    mounted(){
        console.log(`PRIORITY MOUNTED ${this.priority}`)
        console.log(this.priorityProp)
        this.prioclass=this.calculatePriorityColor()
    },
    watch:{
        priority: function(){
            this.prioclass = this.calculatePriorityColor()
        }
    },
    methods: {
        
        toggle(){
            this.active = !this.active
        },
        changePriority(to){
            this.priority = to
            this.$emit('changePriority', this.priority)
            this.toggle()
        },
        calculatePriorityColor(){
            const priorityCol = this.priority
            switch (priorityCol) {
                case 'Low':
                    return 'priority-low'
                    break;
                case 'Normal':
                    return ''
                    break;

                case 'High':
                    return 'priority-high'
                    break;
                case 'Highest':
                    return 'priority-highest'
                    break;
            }
        }
        
    }

    
}
</script>

<style scoped>
.morg{
    /* position: absolute; */
    /* right: 50%; */
    /* top: 7vh */
}
.container{
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 15%;
    width: 10vh;
    border-radius: 12px;
    z-index: 1000000;
    top: 3vh;
    
   
    background-color: #EAECF2;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.solo-element{
    
    display:flex;
    justify-content: center;
    align-items: center;
    
    padding-top: 0.2vh;
    padding-bottom: 0.2vh;
    height: 2vh
}

div.solo-element:hover{
    background-color: #ffffff !important;
    color: #2c3e50 !important;
}
div.solo-element.priority-low{
    background-color: #00DB8C;
    color: #EAECF2;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
}
div.solo-element.priority-normal{
    background-color: #719acc;
    color: #EAECF2;
}
div.solo-element.priority-high{
    background-color: #FFCC16;
    color: #EAECF2;
}
div.solo-element.priority-highest{
    background-color: #F0202D;
    color: #EAECF2;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
}

.dropdown-menu{
    /* position: relative; */
    width: 100%;
}
.btn{
    /* position: absolute; */
    /* top: 5.5vh; */
    /* right: 15%; */
    height:3vh
}
.divider{
    width: 30%;
}
button.priority-low{
background-color: #00DB8C;
}

button.priority-high{
background-color: #FFCC16;
}
button.priority-highest{
background-color: #F0202D;
}
div.priority-low{
    border-color: #00DB8C;
}
div.priority-high{
    border-color: #FFCC16;
}
div.priority-highest{
    border-color: #F0202D;
}
</style>