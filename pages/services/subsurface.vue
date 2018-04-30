<template>
  <div class = "container-subsurface" id="subsurface">

<h1 class ="heading">Subsurface Characterization </h1>



  </div>


</template>

<script>
export default {
  layout: 'layout3'
}
</script>


<style scoped>

.container-subsurface{

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(to top right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url("~/assets/bg1.jpg");
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