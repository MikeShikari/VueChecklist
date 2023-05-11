<template>
    <div :class="this.bg" @click="this.activate()">
        <font-awesome-icon :class="this.checkedData? 'icon' : 'icon-unchecked'" :icon="this.classPicker()" />
    </div>
</template>


<script>
export default {
    props:{
        typer:{
            default: 'Normal',
            type: String
        },
        checked:{
            default: false,
            type: Boolean
        }
    },
    data(props){
        return{
            checkedData: props.checked,
            bg:this.bgPicker()
        }
    },
    mounted(){
        this.bgChooser()
    },
    watch:{
        checkedData: function(){
            this.bgChooser()
        }
    },
    methods:{
        bgChooser(){
            this.bg = this.bgPicker()
        },
        activate(){
            this.checkedData = !this.checkedData
            this.$emit('checked', this.checkedData)
        },
        classPicker(){
            switch(this.typer){
                case 'Normal':
                    return "fa-solid fa-check"
                    break
                case 'Failure':
                    return "fa-solid fa-xmark"
                    break
                case 'Flak':
                    return "fa-solid fa-bomb"
                    break
                case 'Success':
                    return "fa-solid fa-check"
                    break
                case 'Neutral':
                    return "fa-solid fa-minus"
                    break
            }
        },
        bgPicker(){
            switch(this.typer){
                case 'Normal':
                    if(this.checkedData){

                        return "normal background"
                    }else {
return "normal-unchecked background"
                    }
                    break
                case 'Failure':
                    if(this.checkedData){

                        return "failure background"
                    }else {
                        return "failure-unchecked background"
                    }
                    break
                case 'Flak':
                    if(this.checkedData){
                        return "flak background"

                    }else {
                        return "flak-unchecked background"
                    }
                    break
                case 'Success':
                    if(this.checkedData){

                        return "success background"
                    }else {
                        return "success-unchecked background"
                    }
                    break
                case 'Neutral':
                    if(this.checkedData){

                        return "neutral background"
                    }else {
                        return "neutral-unchecked background"
                    }
                    break
            }
        }
    }

    
}
</script>


<style>
.background{
    display: flex;
    align-items: center;
    align-content: center;
    border-radius: 7px;
    width: 30px;
    height: 30px;
}
.normal{
    background-color: #2F68B5;
    border: 2px solid;
    border-color: #2F68B5;
}
.success{
    background-color: #00DB8C;
    border: 2px solid;
    border-color: #00DB8C;
}
.failure{
    background-color: #F0202D;
    border: 2px solid;
    border-color: #F0202D;
}
.flak{
    background-color: #FFCC16;
    border: 2px solid;
    border-color: #FFCC16;
}

.neutral{
     border: 2px solid;
    border-color: #9C9DAC;
    background-color: #9C9DAC;
}
.normal-unchecked{
    border: 2px solid;
    border-color: #2F68B5;
    background-color:#ffffff
}
.success-unchecked{
    border: 2px solid;
    border-color: #00DB8C;
    background-color:#ffffff
}
.failure-unchecked{
    border: 2px solid;
    border-color: #F0202D;
    background-color:#ffffff
}
.flak-unchecked{
    border: 2px solid;
    border-color: #FFCC16;
    background-color:#ffffff
}
.neutral-unchecked{
    border: 2px solid;
    border-color: #9C9DAC;
    background-color:#ffffff
}
.icon-unchecked{
    color: #b0b2c4;
    width: 20px;
    margin: auto;
    height: 20px;
}

.icon{
    color: #ffffff;
    width: 20px;
    margin: auto;
    height: 20px;
}
    
</style>