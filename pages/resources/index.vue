<template>
  <div class = "container-resources" id="resources">

<h1 class ="heading">Resources</h1>
<projects/>
<casestudies/>
<technical/>
<hse/>


  </div>


</template>

<script>

import hse from "@/pages/resources/hse.vue"
import projects from "@/pages/resources/projects.vue"
  import technical from "@/pages/resources/technical.vue"
    import casestudies from "@/pages/resources/casestudies.vue"


export default {
  layout: 'layout3',
  components: {
    hse,
    projects,
    technical,
    casestudies


  }
}
</script>


<style scoped>

.container-resources{

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