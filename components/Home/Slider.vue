<template>
  <section class="container3">
  
  
  
    <div class="slider-info">
      <div class="slider-dot-container">
        <span class="dot slider1-dot " v-on:click="first">01</span>
        <div class="vl"></div>
        <span class="dot slider2-dot " v-on:click="middle">02</span>
        <div class="vl"></div>
        <span class="dot slider3-dot " v-on:click="last">03</span>
      </div>
  
      <div class="slider-heading-main">
        <div class="slider-heading-main1">
          <h1 class="slider1-heading"> Who <span class="wordColorChange">we</span> are </h1>
          <h5 class="slider1-desc">Specialists in geotechnical solutions</h5>
          <div class="slider1-btn">
            <buttonMain/> </div>
        </div>
        <div class="slider-heading-main2">
          <h1 class="slider2-heading"> Worldwide <span class="wordColorChange">strength</span> with local focus </h1>
          <h3 class="slider2-desc">Creating infrastructure that improves the world’s communities</h3>
          <div class="slider2-btn">
            <buttonMain/> </div>
        </div>
        <div class="slider-heading-main3">
          <h1 class="slider3-heading"> What we <span class="wordColorChange">do</span> </h1>
          <h3 class="slider3-desc">We solve geotechnical challenges spanning entire construction spectrums</h3>
          <div class="slider3-btn">
            <buttonMain/> </div>
        </div>
      </div>
  
    </div>
  
  
  
  
  
    <div class="slider-image-container">
      <div class=" slider-image slider1-image"> </div>
      <div class="slider-image  slider2-image"> </div>
      <div class=" slider-image slider3-image"> </div>
  
    </div>
  
  
  </section>
</template>


<style lang="scss">
  .container3 {
    height: 60vh;
    display: flex;
    background-color: #dde6ef;
    background-image: #dde6ef;
    background-image: #dde6ef;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 3;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,f3f3f3+50,ededed+51,ffffff+100;White+Gloss+%232 */
    @include respond(tab-port) {
      flex-direction: column;
    }
  }
  
  .wordColorChange {
    color: #ff7f2a;
  }
  
  .slider-dot-container {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include respond(tab-port) {
      display: none;
    }
  }
  
  .dot {
    height: 25px;
    width: 25px;
    background-color: transparent;
    border-radius: 50%;
    align-self: flex-start;
    /* display: inline-block;
        padding-top: 25px;
        padding-bottom:10px;
       
        left: -150px;
        top: -15px; */
  }
  
  .slider1-dot,
  .slider2-dot,
  .slider3-dot {
    font-Weight: 400;
    color: #bfbbbb;
  }
  
  .vl {
    border-left: 1px solid #c1bdbd;
    height: 70px;
    margin-left: 8px;
    margin-bottom: 4px;
    /* left: -137px;
        padding-top:4px; */
  }
  
  .slider-info {
    flex: 1 0 50%;
    display: flex;
    flex-direction: row;
    padding-left: 60px;
    justify-content: center;
  }
  
  .slider-heading-main {
    flex: 1 0 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 2;
    justify-content: center;
    position: relative;
    @include respond(tab-port) {
      align-items: center;
    }

   @include respond(phone) {
      justify-content: flex-end;
      max-width: 250px;
    }

  }
  
  .slider-heading-main1,
  .slider-heading-main2,
  .slider-heading-main3 {
    position: absolute;
  }

  .slider-heading-main1,
  .slider-heading-main2,
  .slider-heading-main3 {
    position: absolute;
  }
  
  .slider1-heading,
  .slider2-heading,
  .slider3-heading {
    font-size: 42px;
    opacity: 0;
    padding-top: 15px;
    padding-bottom: 0;
    line-height: 40px;

    @include respond(tab-port) {
      font-size: 32px;
      line-height: 20px;
    }

     @include respond(phone) {
      font-size: 22px;
      line-height: 20px;
      padding-top: 5px;
    }
  }
  
  .slider1-desc,
  .slider2-desc,
  .slider3-desc {
    font-size: 25px;
    opacity: 0;
    padding-top: 15px;
    font-weight: 200;
    padding-bottom: 0;
    line-height: 40px;

    @include respond(tab-port) {
      font-size: 15px;
      line-height: 20px;
    }

      @include respond(phone) {
      font-size: 10px;
      line-height: 20px;
      padding-top: 5px;
    }
  }
  
  .slider1-btn,
  .slider2-btn,
  .slider3-btn {
    opacity: 0;
    padding-top: 20px;
    padding-bottom: 0;

     @include respond(phone) {
      padding-top: 10px;
    }

   
  }
  
  .slider-image-container {
    flex: 1 0 50%;
  }
  
  .slider-image {
    
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: 120px;
    
    height: 85%;
    width: auto;
    visibility: hidden;
    display: none;
    object-fit: cover;
    @include respond(tab-port) {
      display:flex;

      margin-top: 50px;
    margin-left:200px;
    
     justify-content: center;
     align-items: center;
      width: 60%;
      height: 100%;
    }

    @include respond(phone) {
      
    margin-left: 125px;
    
    }
  }
  
  .slider1-image {
    background-image: url("~/assets/bg1.jpg");
  }
  
  .slider2-image {
    background-image: url("~/assets/bg2.jpg");
  }
  
  .slider3-image {
    background-image: url("~/assets/bg5.jpg");
  }
</style>


<script>
  import {
  
    TweenMax
  
  } from "gsap";
  
  import Text from "gsap/TextPlugin"
  import TimelineMax from "gsap/TimelineMax";
  import buttonMain from "@/components/Layout/button.vue"
  
  
  export default {
    components: {
      buttonMain
    },
  
  
  
    data() {
  
      return {
  
  
  
  
        tl: new TimelineMax({
  
          paused: false,
  
          reversed: false,
          repeat: -1,
          repeatDelay: 1
  
        }),
        animation2: new TimelineMax({
  
          paused: false,
  
          reversed: false,
          repeat: -1,
          repeatDelay: 1
  
        }),
        animation3: new TimelineMax({
  
          paused: false,
  
          reversed: false,
          repeat: -1,
          repeatDelay: 1
  
        }),
        master: new TimelineMax({
  
          paused: false,
  
          reversed: false,
          repeat: -1,
          repeatDelay: 1,
          yoyo: true
  
        })
  
  
      }
    },
  
    mounted() {
  
      this.master
        .add(this.createPanel(".slider1"), "slide1", 0.1)
        .add(this.createPanel(".slider2"), "slide2", 0.1)
  
        .add(this.createPanel(".slider3"), "slide3", 0.1);
  
  
  
  
    },
  
    methods: {
  
      createPanel: function(panel) {
  
        this.tl.to(panel + '-dot', 0, {
            fontWeight: 1000,
            color: "#ff7f2a"
          })
  
  
          .to(panel + '-image', 0.6, {
            x: -20,
            autoAlpha: 1,
            display: "block"
          })
  
          .to(panel + '-heading', .5, {
            y: -10,
            autoAlpha: 1,
            ease: Linear.easeOutIn
          })
          .to(panel + '-desc', 1, {
            y: -10,
            autoAlpha: 1,
            ease: Linear.easeOutIn
          })
          .to(panel + '-btn', 1.5, {
            y: -10,
            autoAlpha: 1,
            ease: Linear.easeOutIn
          })
          .to(panel + '-image', -0.5, {
            autoAlpha: 0,
            display: "none",
            delay: 7
          })
          .to(panel + '-heading', 0.4, {
            y: -10,
            autoAlpha: 0,
            ease: Back.easeInOut
          })
          .to(panel + '-desc', 0.8, {
            y: -10,
            autoAlpha: 0,
            ease: Back.easeInOut
          })
          .to(panel + '-btn', 1.3, {
            y: -10,
            opacity: 0,
            autoAlpha: 0,
            ease: Back.easeInOut
          })
          .set(panel + '-dot', {
            clearProps: "all"
          }, '-=0.5')
        //  .addPause()
  
  
        return this.tl;
  
  
  
      },
  
  
  
  
  
  
  
  
  
  
  
      first: function() {
  
  
  
        this.master.play(1);
  
  
      },
      middle: function() {
  
        //this.master.seek(this.createPanel(".slider2"));
  
  
      },
      last: function() {
  
        //this.master.add(this.createPanel(".slider3"))
        //.play();
  
      },
  
  
  
  
  
  
  
    }
  
  
  }
</script>