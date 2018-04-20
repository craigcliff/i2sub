<template>
  <section class="main">
  <Slider />
  <Bottom />
  <Services />
  
  </section>
</template>


<style>

.main{

  margin-top: 20px;
}
  
</style>


<script>

  import Slider from "@/components/Home/Slider.vue"
  import Services from "@/components/Home/Services.vue"
  import Bottom from "@/components/Home/Bottom.vue"


  
  export default {
    components: {
      Slider,
      Services,
      Bottom
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