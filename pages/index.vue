<template>
  <section class="container">
    <div class = "logo-main">
      <logo/>
     
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'





export default {
  components: {
    Logo
  }
}
</script>

<style >
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(to top right, rgb(21, 21, 22), rgba(44, 44, 51, 0.21)),url("~/assets/bg2.jpg");
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  
  border-left: 30px white solid;
  border-right: 30px white solid;
}

.logo-main
{

  
  
 
}

.svgMain {

width:500px;
   height:220px

}



</style>
