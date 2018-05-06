<template>
  <header>
    <div class="logo">
  
      <Logo2/>
    </div>
  
  
    <nav class="nav-container">
  
      <ul class="nav-items">
        <li class="nav-item nav-item1">
          <nuxt-link to="/" exact>I2SUB</nuxt-link>
  
  
  
  
        </li>
        <li class="nav-item nav-item2">
          <nuxt-link to="/about">About us
            <span class="toggle">Expand</span><span class="caret" @click="toggleSubNavMobile1"></span>
          </nuxt-link>
  
          <ul class="sub-nav-items " v-bind:class="{'display-subNav-mobile': subNavMobile1}">
  
            <li>
              <nuxt-link to="/about/#who" v-scroll-to="'.container-who'">Who we are</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about/#what" v-scroll-to="'.container-what'">What we do</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about/#worldwide" v-scroll-to="'.container-worldwide'">Worldwide Strength</nuxt-link>
            </li>
  
          </ul>
  
        </li>
        <li class="nav-item nav-item3">
          <nuxt-link to="/services">Our Services
            <span class="toggle">Expand</span><span class="caret" @click="toggleSubNavMobile2"></span>
          </nuxt-link>
  
          <ul class="sub-nav-items  " v-bind:class="{'display-subNav-mobile': subNavMobile2}">
  
  
            <li>
              <nuxt-link to="/services/#drilling" v-scroll-to="'.container-drilling'">Drilling</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/services/#water" v-scroll-to="'.container-water'">Water Services</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/services/#geotechnical" v-scroll-to="'.container-geotechnical'">Geotechnical Services</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/services/#subsurface" v-scroll-to="'.container-subsurface'">Subsurface Characterization</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/services/#oilandgas" v-scroll-to="'.container-oilandgas'">Oil and Gas Services</nuxt-link>
            </li>
  
  
          </ul>
  
  
  
        </li>
        <li class="nav-item nav-item4">
          <nuxt-link to="/resources#resources" v-scroll-to="'.container-resources'">Resources
            <span class="toggle">Expand</span><span class="caret" @click="toggleSubNavMobile3"></span>
          </nuxt-link>
          <ul class="sub-nav-items " v-bind:class="{'display-subNav-mobile': subNavMobile3}">
  
            <li>
              <nuxt-link to="/resources/#projects" v-scroll-to="'.container-projects'">Projects</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/resources/#casestudies" v-scroll-to="'.container-casestudies'">Case Studies</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/resources/#technical" v-scroll-to="'.container-technical'">Technical Drives</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/resources/#hse" v-scroll-to="'.container-hse'">HSE</nuxt-link>
            </li>
  
          </ul>
        </li>
  
        <li class="nav-item nav-item5">
          <nuxt-link to="/contact">Contact Us</nuxt-link>
        </li>

        <div class ="social-media-icons">
          <twitterIcon/>  <linkedinIcon/> <facebookIcon/>
          </div>
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
  
  import Text from "gsap/TextPlugin";
  import TimelineMax from "gsap/TimelineMax";
  import burger from "~/components/burger.vue";
  import Logo2 from "~/components/Logo2.vue";
  import twitterIcon from "~/components/icons/twitter.vue";
  import linkedinIcon from "~/components/icons/linkedin.vue";
  import facebookIcon from "~/components/icons/facebook.vue";
  
  export default {
    components: {
      burger,
      Logo2,
      twitterIcon,
      linkedinIcon,
      facebookIcon
    },
  
    data() {
      return {
        active: false,
        subNavMobile1: false,
        subNavMobile2: false,
        subNavMobile3: false,
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
      },
      toggleSubNavMobile1: function() {
        this.subNavMobile1 = !this.subNavMobile1;
        console.log(this.subNavMobile);
  
        //       if (this.active = true){
        // this.tl.staggerFrom(".nav-item", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
        // }
        // else{
  
        // TweenMax.staggerTo(".nav-item", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
  
        // }
      },
      toggleSubNavMobile2: function() {
        this.subNavMobile2 = !this.subNavMobile2;
        console.log(this.subNavMobile);
  
        //       if (this.active = true){
        // this.tl.staggerFrom(".nav-item", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
        // }
        // else{
  
        // TweenMax.staggerTo(".nav-item", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
  
        // }
      },
      toggleSubNavMobile3: function() {
        this.subNavMobile3 = !this.subNavMobile3;
        console.log(this.subNavMobile);
  
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
        this.tl.to("header", 0.6, {
          css: {
            height: "100%"
          }
        });
        this.tl.staggerTo(".nav-item1, .nav-item2,.nav-item3, .nav-item4,.nav-item5, .social-media-icons", 0.1, {
          left: 10,opacity:1
          
        },0.2);
        //this.tl.staggerFromTo(".nav-item", 2, {scale:0.5, opacity:1, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
        if (val === true) {
          this.tl.play().timeScale(1);
          //this.tl.staggerFrom(".nav-item", 2, {scale:0.5, opacity:1, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
        } else if (val === false) {
          //TweenMax.staggerTo(".nav-item", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
  
          this.tl.reverse().timeScale(10);
          console.log("hello");
        }
      }
    }
  };
</script>


<style lang="scss" scoped>
  header {
    padding: 0px 50px;
    height: 100px;
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
      height: 65px;
      flex-direction: column;
      padding: 0px 20px;
      //  height: 100vh;
    }
  }
  
  .caret {
    border-bottom: 4px solid transparent;
    border-top: 4px solid #ff7f2a;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    border-radius: 1px;
    content: "";
    display: inline-block;
    height: 0;
    margin: 0 0 0 0.25rem;
    transition: 250ms all ease;
    width: 0;
    vertical-align: middle;
    @include respond(tab-port) {
      float: right;
      position: relative;
      top: 5vh;
      // display: none;
    }
  }
  
  .toggle {
    display: none;
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
      height: 90.5vh;
      align-items: space-around;
      justify-content: center;
      padding-top: 35px;
    }
  }
  
  .sub-nav-items {
    //position Nav Items
    position: absolute;
    list-style-type: none;
    display: none;
    background-color: white;
    z-index: 300;
    transition: all 2s;
    @include respond(tab-port) {
      position: absolute;
    }
  }
  
  @include respond(tab-port) {
    .display-subNav-mobile {
      display: block;
    }
  }
  
  @include respond(tab-port) {
    li {
      width: 250px;
      //  padding-left:20px;
      //  padding-right:20px;
    }
  }
  

  @include respond(tab-port) {
  .nav-item1,.nav-item2,.nav-item3,.nav-item4,.nav-item5   {
    opacity: 0;
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
      font-size: 34px;
    }
    & li {
      line-height: 2.6em;
      @include respond(tab-port) {
        line-height: 1.5em;
        border-bottom: $color-secondary-light solid 1px;
      }
      & a {
        color: $color-black;
        font-family: helvetica;
        text-decoration: none;
        padding: 0 2em;
        font-size: 16px;
        font-weight: 500;
        @include respond(tab-port) {
          padding-left: 0px;
          // padding-right: 100px;
          font-size: 20px;
        }
      }
      & ul {
        &:last-child {
          padding-bottom: 20px;
        }
      }
      & ul li {
        padding-top: 10px;
        margin-left: 30px;
        margin-right: 30px;
        border-bottom: $color-secondary-light solid 1px;
        @include respond(tab-port) {
          padding-top: 0px;
          padding-left: 0px;
          margin-left: 0px;
          margin-right: 0px;
          border-bottom: $color-secondary-light solid 1px;
          &:first-child {
            border-top: $color-secondary-light solid 1px;
          }
        }
      }
      & ul li a {
        font-size: 14px;
        font-weight: 500;
        padding-left: 15px;
        white-space: nowrap;
      }
      @include respond(desktop) {
        &:hover>a {
          transition: 0.3s all ease-in-out;
          color: $color-primary;
          & span.caret {
            border-top-color: black;
            transform: rotate(270deg);
          }
        }
      }
    }
    &>li:not(:last-child) {
      border-right: 1px solid $color-secondary-light;
      @include respond(tab-port) {
        border-right: 0;
      }
    }
  }
  
  .displayNavItems {
    @include respond(tab-port) {
      display: flex;
      flex-direction: column;
    }
  }
  
  
  /*Prevent text wrapping*/
  
  @include respond(desktop) {
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
    .nav-items li:hover>ul.sub-nav-items {
      //display SubNav items on hover
      display: flex;
      flex-direction: column;
    }
  }
  
  .burger {
    padding-top: 5px;
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

  .social-media-icons {
    display: none;
    

 @include respond(tab-port) {

    display: flex;
    height: 20vh;
    align-items: center;
    justify-content: center;
    opacity:0;


  }

  }
</style>

