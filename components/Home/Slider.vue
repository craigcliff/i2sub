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
        <h1 class="slider1-heading"> Who <span class="wordColorChange">we</span> are </h1>
        <h5 class="slider1-desc">Specialists in geotechnical solutions</h5>
        <div class="slider1-btn">
          <buttonMain/> </div>
        <h1 class="slider2-heading"> Worldwide <span class="wordColorChange">strength</span> with local focus </h1>
        <h3 class="slider2-desc">Creating infrastructure that improves the world’s communities</h3>
        <div class="slider2-btn">
          <buttonMain/> </div>
        <h1 class="slider3-heading"> What we <span class="wordColorChange">do</span> </h1>
        <h3 class="slider3-desc">We solve geotechnical challenges spanning entire construction spectrums</h3>
        <div class="slider3-btn">
          <buttonMain/> </div>
      </div>
  
    </div>
  
  
  
  
  
    <div class="slider-image-container">
      <div class="slider1-image"> </div>
      <div class="slider2-image"> </div>
      <div class="slider3-image"> </div>
  
    </div>
  

  </section>
</template>


<style>
  .container3 {
    height: 70vh;
    display: flex;
    background-color: #dde6ef;
    background-image: #dde6ef;
    background-image: #dde6ef;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    
    z-index:3;    
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,f3f3f3+50,ededed+51,ffffff+100;White+Gloss+%232 */
  }

  .wordColorChange{

color:#ff7f2a; 

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
  
  .slider1-dot {
    font-Weight: 400;
    color: #bfbbbb;
  }
  
  .slider2-dot {
    font-Weight: 400;
    color: #bfbbbb;
  }
  
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
  
  .slider-dot-container {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .slider-heading-main {
    flex: 1 0 20%;
    height: 100%;
    display: flex;
    z-index: 2;
    
  }
  
  .slider1-heading {
    font-size: 42px;
    position: absolute;
    top: 290px;
    max-width: 300px;
    opacity: 0;
       
  }
  
  .slider1-desc {
    font-size: 25px;
    position: absolute;
    top: 350px;
    font-weight: 200;
    opacity: 0;
      
  }
  
  .slider1-btn {
    position: absolute;
    top: 400px;
    opacity: 0;
    
  }
  
  .slider2-heading {
    font-size: 42px;
    position: absolute;
    top: 250px;
    opacity: 0;
    max-width: 500px;
       
  }
  
  .slider2-desc {
    font-size: 25px;
    position: absolute;
    top: 360px;
    opacity: 0;
    max-width: 500px;
    font-weight: 200;
     
  }
  
  .slider2-btn {
    position: absolute;
    top: 440px;
    opacity: 0;
    
  }
  
  .slider3-heading {
    font-size: 42px;
    position: absolute;
    top: 260px;
    opacity: 0;
    max-width: 500px;
      
  }
  
  .slider3-desc {
    font-size: 25px;
    position: absolute;
    top: 330px;
    opacity: 0;
    max-width: 500px;
    font-weight: 200;
       
  }
  
  .slider3-btn {
    position: absolute;
    top: 420px;
    opacity: 0;
  
  }
  
  .slider-image-container {
    flex: 1 0 50%;
  }
  
  .slider1-image {
    background-image: url("~/assets/bg1.jpg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: 60px;
    margin-left: 90px;
    height: 100%;
    width: 85%;
    visibility: hidden;
    display: none;
  }
  
  .slider2-image {
    background-image: url("~/assets/bg2.jpg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: 60px;
   margin-left: 90px;
    height: 100%;
    width: 85%;
    visibility: hidden;
    display: none;
  }
  
  .slider3-image {
    background-image: url("~/assets/bg5.jpg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: 60px;
    margin-left: 90px;
    height: 100%;
    width: 85%;
    visibility: hidden;
    display: none;
  }

@media (max-width: 900px) {

.container3 {
  flex-direction: column;
}

.slider-dot-container{
display: none;

}


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
        .add(this.createPanel(".slider1"), "slide1")
        .add(this.createPanel(".slider2"), "slide2")
  
        .add(this.createPanel(".slider3"), "slide3");
  
    
  
  
    },
  
    methods: {
  
      createPanel: function(panel) {
  
        this.tl.to(panel + '-dot', 0, {
            fontWeight: 1000,
            color: "#ff7f2a"
          })

          
          .to(panel + '-image', 1, {
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