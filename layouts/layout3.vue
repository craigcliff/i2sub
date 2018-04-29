<template>
  <div class ="container" >
   
     <TheHeader3/>
    <TheSidenav />
    <nuxt/>
  </div>
</template>

<script>

import TheSidenav from '@/components/Navigation/TheSidenav'
import TheHeader3 from '@/components/Navigation/TheHeader3'

export default{

  components: {

    TheSidenav,
    TheHeader3


  }





}

</script>

<style scoped>




</style>
