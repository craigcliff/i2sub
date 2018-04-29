<template>
    <header>
        <div class="logo">Logo </div>
        <nav class="nav-container">
    
            <ul class="nav-items">
                <li class="nav-item "><nuxt-link to="/" exact>I2SUB</nuxt-link>
    
    
  
    
                </li>
                <li class="nav-item">    <nuxt-link to="/about">About us</nuxt-link>

                    <ul class="sub-nav-items">
                       
                        <li> <nuxt-link to="/about/who">Who we are</nuxt-link></li>
                        <li> <nuxt-link to="/about/what">What we do</nuxt-link></li>
                        <li> <nuxt-link to="/about/worldwide">Worldwide Strength</nuxt-link></li>
    
                    </ul>
    
                </li>
               <li class="nav-item">    <nuxt-link to="/services">Our Services</nuxt-link>
    
                    <ul class="sub-nav-items">


                        <li> <nuxt-link to="/services/drilling">Drilling</nuxt-link></li>
                        <li> <nuxt-link to="/services/water">Water Services</nuxt-link></li>
                        <li> <nuxt-link to="/services/geotechnical">Geotechnical Services</nuxt-link></li>
                        <li> <nuxt-link to="/services/subsurface">Subsurface Characterization</nuxt-link></li>
                        <li> <nuxt-link to="/services/oilgas">Oil and Gas Services</nuxt-link></li>
                        
                      
                    </ul>
    
    
    
                </li>
                <li class="nav-item"><nuxt-link to="/resources">Resources</nuxt-link>
                    <ul class="sub-nav-items">
                      
                        <li> <nuxt-link to="/resources/projects">Projects</nuxt-link></li>
                        <li> <nuxt-link to="/resources/casestudies">Case Studies</nuxt-link></li>
                        <li> <nuxt-link to="/resources/technical">Technical Drives</nuxt-link></li>
                        <li> <nuxt-link to="/resources/hse">HSE</nuxt-link></li>
    
                    </ul>
                </li>
    
            <li class="nav-item"><nuxt-link to="/contact">Contact Us</nuxt-link></li>
            </ul>
    
    
    
        </nav>
        <div class="burger" @click="toggleButton">
            <burger :toggle="active" /> </div>
    
    
    </header>
</template>


<script>
import { TweenMax } from "gsap";

import Text from "gsap/TextPlugin";
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
        paused: false
        // repeat:-1
      })
    };
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
  watch: {
    active: function(val) {
      this.tl.to("header", 0.1, {
        css: {
          height: "100%"
        }
      });
      this.tl.to(".nav-items", 0.1, {
        css: {
          opacity: 1,
          ease: Elastic.easeOut
        }
      });
      //this.tl.staggerFromTo(".nav-item", 2, {scale:0.5, opacity:1, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
      if (val === true) {
        this.tl.play();
        //this.to.staggerFrom(".nav-item", 2, {scale:0.5, opacity:1, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
      } else if (val === false) {
        //TweenMax.staggerTo(".nav-item", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);

        this.tl.reverse();
        console.log("hello");
      }
    }
  }
};
</script>


<style lang="scss" scoped>
header {
        padding: 0px 50px;
  height: 11.5vh;
  background-color: white;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   transition: all 0.5s ease-in;
  position: fixed;
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
}

.nav-items {
  display: flex;
  list-style-type: none;
  position: relative;

  margin: 0;
  padding: 0;

  @include respond(tab-port) {
    display: block;
    opacity: 0;
    font-size: 34px;
  }
  & li {
    line-height: 2.6em;

    @include respond(tab-port) {
      padding-bottom: 50px;
    }
    & a {
      color: $color-black;
      font-family: helvetica;
      text-decoration: none;
      padding: 0 2em;
      font-size: 16px;
      font-weight: 500;

     
    }
    & ul{



&:last-child{
    padding-bottom:20px;

}
    }

     & ul li{
         padding-top: 10px;
        
         margin-left:30px;
        margin-right:30px;
         border-bottom: $color-secondary-light solid 1px;
        
         



     }

      & ul li a {
           
            font-size: 14px;
      font-weight: 500;
      

        }

       

    &:hover > a {
      transition: 0.3s all ease-in-out;
      color: $color-primary;
    }
  }

  & > li:not(:last-child) {
    border-right: 1px solid $color-secondary-light;
  }
}



.displayNavItems {
  @include respond(tab-port) {
    display: block;
    flex-direction: column;
  }
}

/*Prevent text wrapping*/


li:hover ul a {
  //dropdown list style
  
  color: #2f3036;
  height: 40px;
  line-height: 40px;
  &:hover {
    ////hover state for Nav Items

    color: $color-primary;
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

a.nuxt-link-active {
  color: $color-primary !important;
  
  
}
li.nuxt-link-active a {
   color: $color-primary !important;
}

</style>

