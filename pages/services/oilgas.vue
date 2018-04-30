<template>
  <div class = "container-oilandgas" id="oilandgas">

<h1 class ="heading">Oil and Gas</h1>



  </div>


</template>

<script>
export default {
  layout: 'layout3'
}
</script>


<style scoped>

.container-oilandgas{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(to top right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url("~/assets/oil1.jpg");
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