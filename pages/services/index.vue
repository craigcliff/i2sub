<template>
  <div class = "container-services" id ="services">

<h1 class ="heading">Our Services</h1>

<drilling/>
<water/>
<geotechnical/>
<subsurface/>
<oilandgas/>


  </div>



</template>

<script>

import drilling from "@/pages/services/drilling.vue"
import water from "@/pages/services/water.vue"
  import geotechnical from "@/pages/services/geotechnical.vue"
  import subsurface from "@/pages/services/subsurface.vue"
  import oilandgas from "@/pages/services/oilgas.vue"
export default {
  layout: 'layout3',

  components: {

    drilling,
    water,
    geotechnical,
    subsurface,
    oilandgas


  }


}
</script>


<style scoped>

.container-services{
 
height: 100vh;

background: cadetblue

}

.heading{
   
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;

}




</style>