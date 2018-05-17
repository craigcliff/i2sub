<template>
  


<div class="container-who" id="who">
  
       <div class="who-image-container">
      <div class="who-image">
        <img src="~/assets/oil2.jpg"  >
      </div>
      <div class="who-image-cover"> </div>
    </div>
  
    <div class="who-info">
  
  
      <div class="who-info-heading-container">
  
        <div class="who-info-heading">
         Who We Are
        </div>
  
        <div class="who-info-line"></div>
      </div>
      <p class="who-info-description">
  
       Lorem ipsum dolor sit amet, vix in omnium doctus inimicus. Agam invenire praesent per et, natum percipitur cu qui. Eu noster dignissim vis, nec ne tempor essent antiopam. Id pri novum prompta aliquando, commodo equidem detracto te vix, has id exerci postulant gubergren. No nisl ceteros ullamcorper per, perfecto comprehensam ad has, est ei dicit graece petentium. Vis minim ornatus voluptatibus ad, eos ut nusquam constituam, mel quis cetero ei.
      Lorem ipsum dolor sit amet, vix in omnium doctus inimicus. Agam invenire praesent per et, natum percipitur cu qui. Eu noster dignissim vis, nec ne tempor essent antiopam. Id pri novum prompta aliquando, commodo equidem detracto te vix, has id exerci postulant gubergren. No nisl ceteros ullamcorper per, perfecto comprehensam ad has, est ei dicit graece petentium. Vis minim ornatus voluptatibus ad, eos ut nusquam constituam, mel quis cetero ei.
      
  
  
      </p>
  
  <p class="who-info-description">
  
       Lorem ipsum dolor sit amet, vix in omnium doctus inimicus. Agam invenire praesent per et, natum percipitur cu qui. Eu noster dignissim vis, nec ne tempor essent antiopam. Id pri novum prompta aliquando, commodo equidem detracto te vix, has id exerci postulant gubergren. No nisl ceteros ullamcorper per, perfecto comprehensam ad has, est ei dicit graece petentium. Vis minim ornatus voluptatibus ad, eos ut nusquam constituam, mel quis cetero ei.
      Lorem ipsum dolor sit amet, vix in omnium doctus inimicus. Agam invenire praesent per et, natum percipitur cu qui. Eu noster dignissim vis, nec ne tempor essent antiopam. Id pri novum prompta aliquando, commodo equidem detracto te vix, has id exerci postulant gubergren. No nisl ceteros ullamcorper per, perfecto comprehensam ad has, est ei dicit graece petentium. Vis minim ornatus voluptatibus ad, eos ut nusquam constituam, mel quis cetero ei.
      
  
  
      </p>
  
  <p class="who-info-description">
  
       Lorem ipsum dolor sit amet, vix in omnium doctus inimicus. Agam invenire praesent per et, natum percipitur cu qui. Eu noster dignissim vis, nec ne tempor essent antiopam. Id pri novum prompta aliquando, commodo equidem detracto te vix, has id exerci postulant gubergren. No nisl ceteros ullamcorper per, perfecto comprehensam ad has, est ei dicit graece petentium. Vis minim ornatus voluptatibus ad, eos ut nusquam constituam, mel quis cetero ei.
  
  
  
      </p>
  
    </div>
  
  


      </div>

</template>


<script>
  import {
    TweenMax
  } from "gsap";
  
  
  import TimelineMax from "gsap/TimelineMax";
  
  
  
  export default {
    layout: 'layout3',
    data() {
  
      return {
        animated: false,
        // pageImage: '/images/content1.jpg',
        tl: new TimelineMax({
          paused: false
          // repeat:-1
        })
      };
    },
  
    watch: {
      visible(visible) {
        if (visible && !this.animated) {
          // const { camera, who, title, copy } = this.$refs
          // TweenMax.to(camera, .6, { opacity: 1, scale: 1, ease: Expo.easeOut })
          // TweenMax.to(who, .6, { scaleY: 1, ease: Expo.easeOut })
          // TweenMax.to([title, copy], .5, { delay: .4, opacity: 1 })
  
          this.staggerServices();
          this.animated = true;
        }
      }
    },
  
    props: {
      visible: {
        type: Boolean,
        default: () => false
      },
  
      title: {
        type: String,
        default: ''
  
      },
      pageImage:{
        type: String,
        default:''

      },
      desc:{
        type: String,
        default: ''
      }
  
    },
  
    mounted() {
      this.$store.commit("navStateTrue");
      this.getWidth();
      // this.tl.set(".who-info-line",{height:"2px"})
  
    },
  
    methods: {
      staggerServices: function() {
  
        var duration = 0.3;
  
  
  
        this.tl.to(".who-info-line", duration, {
  
            opacity: 1
          })
          //increase size of clipPath to reveal text
          .to(".who-info-heading", duration, {
            clipPath: "inset(0px 0px 0% 1px)",
            ease: Linear.easeNone
          }, "reveal")
          //move line down at same speed at the same time
          .to(".who-info-line", duration, {
            top: "-3px",
            ease: Linear.easeNone
          }, "reveal")
          //shrink the line
          .to(".who-image-cover", 0.5, {
            opacity: 1
  
          })
          .from(".who-image-cover", 0.5, {
            scaleX: 0,
            transformOrigin: "left"
          })
          .to(".who-image-cover", 0.5, {
            scaleX: 0,
            transformOrigin: "right",
  
          }, "reveal2")
          .to(".who-image", duration, {
            opacity: 1
          }, "reveal2")
  
          .from(".who-image", duration, {
            opacity: 0
          }, "reveal2")
          .to(".who-info-description", duration, {
            opacity: 1,
            transformOrigin: "right"
          }, "reveal2");
  
  
      },
      getWidth: function() {
        var box = document.querySelector('.who-info-heading');
        var width = box.offsetWidth;
        console.log("the width is " + width);
  
  
  
  
      }
  
  
  
  
    }
  }
</script>


<style scoped lang="scss">


  .container-who {

    display: flex;
    flex-direction: row-reverse;
    padding: 0px 50px;
    
  }
  
  .who-image-container {
    flex: 1;
    height: 600px;
    margin-left: 50px;
    position: relative;
  }
  
  img {
    height: 65vh;
    width: 100%;
  }
  
  .who-image {
    // background-image: url("~/assets/content1.jpg");
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    min-height: 600px;
    width: 100%;
    position: absolute;
    opacity: 0;
    display: flex;
    &-cover {
      width: 100%;
      height: 65vh;
      background: $color-primary;
      position: absolute;
      opacity: 0;
    }
  }
  
  .who-info-heading-container {
    display: inline-flex;
  flex-direction: column;
  
  
  }
  
  .who-info {
    // width: 50%;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // &-heading {
    //   width: 100%;
    //   text-align: left;
    //   // margin-bottom:50px;
    //   font-family: Miller-text, helvetica;
    //   font-weight: 400;
    //   font-size: 42px;
    //   line-height: 60px;
    //   z-index: 200;
    flex-direction: column;
   
    flex: 1;
    display: flex;
align-items: flex-end;
    &-heading {
      font-family: Miller-text, helvetica;
      font-weight: 400;
      font-size: 2.8vw;
      z-index: 100;
      text-align: left;
      
    // position:absolute;
      line-height: 42px;
      clip-path: inset(0px 0px 100% 1px);
       
  
      @include respond(big-desktop) {}
    }
    &-line {
      
     
      height: 6px;
      background-color: $color-primary;
      z-index: 0;
      opacity: 0;
      position:relative;
     top: -50px;
    left: 0;
    right: 0;
     
     


      @include respond(big-desktop) {}
      // left: -210px;
      // background-color: $color-primary;
      // margin-bottom: 30px;
      // @include respond(big-desktop) {
      //   width: 18%;
      //   left: -345px;
      // }
    }
    &-description {
      width: 100%;
      text-align: justify;
      font-family: Miller-text, helvetica;
      font-weight: 400;
      color: $color-black;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: .02em;
      margin-top:30px;
      opacity: 0;
      @include respond(big-desktop) {
        font-size: 14px;
        line-height: 22px;
        letter-spacing: .02em;
      }
    }
  }
  
 
</style>