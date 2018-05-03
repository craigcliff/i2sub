<template>
<section class="main-home">
  <div class="bg-home" v-bind:class="{'bg-home-after':(navState==true)}">
    <div class = "logo-main" :class="{'logo-main-after':(navState==true)}">
      <logo/>
     
    </div>

   
<div class ="arrow" v-on:click="setNavToTrue"  :class="{'arrow-after':(navState==true)}" >
<Arrow/>

  
    </div>

    <!-- <router-link to="/about">
    
    </router-link> -->
  </div>

  <div class= "blog-section">





    </div>

  </section>
</template>



<script>
import Logo from '~/components/Logo.vue'
 import Arrow from "@/components/Home/Arrow.vue"
import { mapState } from 'vuex'



    


export default {

  layout: 'layout3',
  components: {
    Logo,
     Arrow
  },
  beforeMount() {
 this.setNavToFalse();


  },
computed:{

  navState(){
console.log(this.$store.state.navState)
    return this.$store.state.navState
  }

},

methods:{
setNavToFalse: function(){

this.$store.commit('navStateFalse');

},


setNavToTrue: function(){

this.$store.commit('navStateTrue');

}


}

}
</script>

<style scoped >

.section-home{
height: 100vh;
;
  display: flex;

}
.bg-home
{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(to top right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url("~/assets/bg2.jpg");
  background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  
}

.bg-home-after{

height: 60vh;
background-image: linear-gradient(to top right, rgba(46, 32, 32, 0.7), rgba(255, 255, 255, 0.7)),url("~/assets/bg2.jpg");
transition: all 0.6s;
background-position: bottom;

}

.logo-main{
height: 60vh;
 display: flex;
 justify-content: center;
  align-items: flex-end;

}

.logo-main-after{

  display: none
}



.arrow{
  height: 30vh;
  display: flex;
 justify-content: center;
  align-items: flex-end;


}

.arrow-after{

display: none;

}
  
  
  




</style>
