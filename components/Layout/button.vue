<template>
    

  <button class="testbutton" v-scroll-to="myProp">Find out More</button>


</template>

<script>
export default {
  props: [
    'myProp'
  ]
}
</script>


<style lang= "scss">

.testbutton {
  width: 145px;
  height: 45px;
  font-family: arial;
  font-weight: 600;
  color: #FFFFFF !important;
  font-size: 10px;

  
  
  box-shadow: 0px 1px 1px #000000;
  padding: 10px 25px;
  border: 2px solid #030508;
  background: #000000;
  text-transform: uppercase;
@include respond(tab-port) {
     width: 145px;
  height: 40px;
    }


}
.testbutton:hover {
  color: rgb(0, 2, 5) !important;
  background: $color-primary;
  border: 2px solid $color-primary;
    box-shadow: none;
  cursor: pointer; 
}


    
</style>