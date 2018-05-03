<template>
  <div class ="container" >
   

    <div v-if="navState">
     <TheHeader3/>
     </div>
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


  },

//     mounted() {
//  this.setNavToFalse();


//   },
computed:{

  navState(){
console.log(this.$store.state.navState)
    return this.$store.state.navState
  }

// },

// methods:{
// setNavToFalse: function(){

// this.$store.commit('navStateFalse');

// }

// }





}
}

</script>

<style scoped>




</style>
