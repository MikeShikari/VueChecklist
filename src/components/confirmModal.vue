<template>
    <div class="modal-overlay" @click.prevent.stop="">
      <div class="modal">
        <h6> {{ header }} </h6>
        <p>{{text0}}</p>
        <button @click="action1" class="success bttn"> {{ text1 }} </button>
        <button @click="action2" class="failure bttn"> {{ text2 }} </button>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      props:{
        header:{
          type: String
        },
        text0:{
          type: String
        },
        text1:{
          type:String
        },
        action1:{
        type: Function
      },
      action2: {
        type:Function
      },
      text2:{
        type:String
      }
      },
      
  }
  </script>

<style scoped>

.modal-overlay {
  position: fixed;
  z-index: 90000000000;
  opacity: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 25vh;
  width: 50vh;
  margin-top: 10%;
  border-radius: 12px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 2vh;
}

.bttn{
  margin: 5vh;
  
}

</style>