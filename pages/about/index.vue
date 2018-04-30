<template>
  <section class="main" id="about">

  <Slider />
  <Bottom />
  <what/>
      <who/>
      <worldwide/>

 
 <!-- <nuxt-child :key="$route[1]"/>
 <nuxt-child :key="$route.worldwide"/> -->
  <!-- <what />
  <who />
  <worldwide /> -->
  <Services />
  
  </section>
</template>


<style>

/* .main{

  margin-top: 20px;
}
   */
</style>


<script>

  import Slider from "@/components/Home/Slider.vue"
  import Services from "@/components/Home/Services.vue"
  import Bottom from "@/components/Home/Bottom.vue"
import what from "@/pages/about/what.vue"
import who from "@/pages/about/who.vue"
  import worldwide from "@/pages/about/worldwide.vue"


  export default {
    components: {
      Slider,
      Services,
      Bottom,
      what,
      who,
      worldwide
    },

    layout: 'layout3',
  
  
  
    data() {
  
      return {
  
  
  
  
  
  
  
      }
    },
  
    mounted() {
  
  
  
  
  
  
  
  
    },
  
    methods: {
  
  
  
  
  
    }
  
  
  
  
  
  
  
  
  
  
  }
</script>