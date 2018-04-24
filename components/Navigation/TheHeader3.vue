<template>
    <header >
        <div class="logo">Logo </div>
        <nav class="nav-container">
    
            <ul class="nav-items">
                <li class="nav-item"><a href="#">About Us</a>
    
                </li>
                <li class="nav-item" ><a class="active" href="#">What we do</a>
    
                    <ul class="sub-nav-items">
                        <li class="about1"><a href="#">About Us</a></li>
                        <li class="what2"><a class="active" href="#">What we do</a></li>
                        <li class="how3"><a href="#">How we do it</a></li>
                        <li class="where4"><a href="#">Where we've done it</a></li>
                        <li class="contact5"><a href="#">Contact us</a></li>
                    </ul>
    
                </li>
                <li class="nav-item"><a href="#">How we do it</a>
    
                    <ul class="sub-nav-items">
                        <li class="about3"><a href="#">About Us</a></li>
                        <li class="what5"><a class="active" href="#">What we do</a></li>
                        <li class="how2"><a href="#">How we do it</a></li>
                        <li class="where5"><a href="#">Where we've done it</a></li>
                        <li class="contactd"><a href="#">Contact us</a></li>
                    </ul>
    
    
    
                </li>
                <li class="nav-item"><a href="#">Where we've done it</a></li>
                <li class="nav-item"><a href="#">Contact us</a></li>
            </ul>
    
    
    
        </nav>
        <div class="burger" @click="toggleButton">
            <burger :toggle="active" /> </div>
    
    
    </header>
</template>


<script>

  import {
  
    TweenMax
  
  } from "gsap";
  
  import Text from "gsap/TextPlugin"
  import TimelineMax from "gsap/TimelineMax";
  import burger from "~/components/burger.vue";

export default {
  components: {
    burger
  },

  data() {
    return {
      active: false,
      tl: new TimelineMax({
  
          paused: false,
         // repeat:-1
  
          
  
        })


    }
  },

  mounted() {},

  methods: {
    toggleButton: function() {
      this.active = !this.active;
      console.log(this.active);

//       if (this.active = true){
// this.tl.staggerFrom(".nav-item", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
// }
// else{

// TweenMax.staggerTo(".nav-item", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);

// }


    }

  },
  watch:{

active:function(val){

this.tl.to('header', 0.1, {css: {height: '100%'}})
this.tl.to('.nav-items', 0.1 ,{css: {opacity: 1}})
//this.tl.staggerFrom(".nav-item", 2, {scale:0.5, opacity:1, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
if (val === true){
    this.tl.play();
//this.to.staggerFrom(".nav-item", 2, {scale:0.5, opacity:1, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
}
else if (val ===false){

//TweenMax.staggerTo(".nav-item", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);

this.tl.reverse();
console.log('hello');

}


}

  }
};
</script>


<style lang="scss" scoped>
header {
  height: 7.5vh;
  background-color: grey;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
//   transition: all 0.5s ease-in;
  position: absolute;
  z-index: 400;
  // @include respond(tab-port) {
  //     flex-direction: column;
  //     height: 100vh;
  // }

  @include respond(tab-port) {
    flex-direction: column;
   //  height: 100vh;
  }
}

.toggleHeader {
  
 
}

.logo {
  width: 20%;
  @include respond(tab-port) {
    align-self: flex-start;
    height: 7.5vh;
  }
}

.nav-container {
  @include respond(tab-port) {
    display: flex;
    height: 92.5vh;
    align-items: center;
    justify-content: center;
  }
}

.sub-nav-items {
  //position Nav Items
  position: absolute;
  list-style-type: none;
  display: none;
  background-color: white;
  z-index: 300;
  &:before {
  }
}

.nav-items {
  display: flex;
  list-style-type: none;
  position: relative;
  margin: 0;
  padding: 0;
  @include respond(tab-port) {
    display: block;
    opacity:0;
    font-size: 34px;
     
  }
  & li {
    @include respond(tab-port) {
      padding-bottom: 50px;
     
    }
    &:hover a {
      color: #19c589;
    }
    & a {
      text-decoration: none;
      padding-right: 60px;
    }
  }
}



.displayNavItems {
  @include respond(tab-port) {
    display: block;
    flex-direction: column;
   
  }
}

/*Prevent text wrapping*/

li ul li a {
  width: auto;
  min-width: 100px;
  padding: 0 20px;
}

li:hover ul a {
  //dropdown list style
  background: #f3f3f3;
  color: #2f3036;
  height: 40px;
  line-height: 40px;
  &:hover {
    ////hover state for Nav Items
    background: #19c589;
    color: #fff;
  }
}

.nav-items li:hover > ul.sub-nav-items {
  //display SubNav items on hover
  display: flex;
  flex-direction: column;
}

.burger {
  height: 40px;
  width: 60px;
  display: none;
  @include respond(tab-port) {
    display: flex;
    position: absolute;
    right: 3%;
    top: 1%;
  }
}
</style>

