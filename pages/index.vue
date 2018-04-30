<template>
  <section class="container-home">
    <div class = "logo-main">
      <logo/>
     
    </div>

<div class ="arrow">
  <router-link to="/about">
    <Arrow/>
    </router-link>
    </div>
  </section>
</template>



<script>
import Logo from '~/components/Logo.vue'
 import Arrow from "@/components/Home/Arrow.vue"




    


export default {

  // layout: 'layout3',
  components: {
    Logo,
     Arrow
  }
}
</script>

<style scoped >
.container-home
{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(to top right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url("~/assets/bg2.jpg");
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  
}

.logo-main{
height: 60vh;
 display: flex;
 justify-content: center;
  align-items: flex-end;

}



.arrow{
  height: 30vh;
  display: flex;
 justify-content: center;
  align-items: flex-end;


}
  
  
  




</style>
