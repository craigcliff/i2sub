<template>
  <div class = "container-drilling" id="drilling">

<h1 class ="heading">Drilling</h1>



  </div>


</template>

<script>
export default {
  layout: 'layout3'
}
</script>


<style scoped>

.container-drilling{

  min-height: 100vh;
  width:60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("~/assets/drilling1.jpg");
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}

.heading{
   
    height:30vh;
    display: flex;
    align-items: center;
    justify-content: center;

}




</style>