<template>
  <div class = "container-what" id="what">



  
       <div class="content-image-container">
      <div class="content-image">
        <img src="~/assets/bg5.jpg"  >
      </div>
      <div class="content-image-cover"> </div>
    </div>
  
    <div class="content-info">
  
  
      <div class="content-info-heading-container">
  
        <div class="content-info-heading">
         What we do
        </div>
  
        <div class="content-info-line"></div>
      </div>
     <p class="content-info-description">
  
       Lorem ipsum dolor sit amet, vix in omnium doctus inimicus. Agam invenire praesent per et, natum percipitur cu qui. Eu noster dignissim vis, nec ne tempor essent antiopam. Id pri novum prompta aliquando, commodo equidem detracto te vix, has id exerci postulant gubergren. No nisl ceteros ullamcorper per, perfecto comprehensam ad has, est ei dicit graece petentium. Vis minim ornatus voluptatibus ad, eos ut nusquam constituam, mel quis cetero ei.
      Lorem ipsum dolor sit amet, vix in omnium doctus inimicus. Agam invenire praesent per et, natum percipitur cu qui. Eu noster dignissim vis, nec ne tempor essent antiopam. Id pri novum prompta aliquando, commodo equidem detracto te vix, has id exerci postulant gubergren. No nisl ceteros ullamcorper per, perfecto comprehensam ad has, est ei dicit graece petentium. Vis minim ornatus voluptatibus ad, eos ut nusquam constituam, mel quis cetero ei.
      
  
  
      </p>
  
  <p class="content-info-description">
  
       Lorem ipsum dolor sit amet, vix in omnium doctus inimicus. Agam invenire praesent per et, natum percipitur cu qui. Eu noster dignissim vis, nec ne tempor essent antiopam. Id pri novum prompta aliquando, commodo equidem detracto te vix, has id exerci postulant gubergren. No nisl ceteros ullamcorper per, perfecto comprehensam ad has, est ei dicit graece petentium. Vis minim ornatus voluptatibus ad, eos ut nusquam constituam, mel quis cetero ei.
      Lorem ipsum dolor sit amet, vix in omnium doctus inimicus. Agam invenire praesent per et, natum percipitur cu qui. Eu noster dignissim vis, nec ne tempor essent antiopam. Id pri novum prompta aliquando, commodo equidem detracto te vix, has id exerci postulant gubergren. No nisl ceteros ullamcorper per, perfecto comprehensam ad has, est ei dicit graece petentium. Vis minim ornatus voluptatibus ad, eos ut nusquam constituam, mel quis cetero ei.
      
  
  
      </p>
  
  <p class="content-info-description">
  
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
          // const { camera, content, title, copy } = this.$refs
          // TweenMax.to(camera, .6, { opacity: 1, scale: 1, ease: Expo.easeOut })
          // TweenMax.to(content, .6, { scaleY: 1, ease: Expo.easeOut })
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
      // this.tl.set(".content-info-line",{height:"2px"})
  
    },
  
    methods: {
      staggerServices: function() {
  
        var duration = 0.3;
  
  
  
        this.tl.to(".content-info-line", duration, {
  
            opacity: 1
          })
          //increase size of clipPath to reveal text
          .to(".content-info-heading", duration, {
            clipPath: "inset(0px 0px 0% 1px)",
            ease: Linear.easeNone
          }, "reveal")
          //move line down at same speed at the same time
          .to(".content-info-line", duration, {
            top: "-3px",
            ease: Linear.easeNone
          }, "reveal")
          //shrink the line
          .to(".content-image-cover", 0.5, {
            opacity: 1
  
          })
          .from(".content-image-cover", 0.5, {
            scaleX: 0,
            transformOrigin: "right"
          })
          .to(".content-image-cover", 0.5, {
            scaleX: 0,
            transformOrigin: "left",
  
          }, "reveal2")
          .to(".content-image", duration, {
            opacity: 1
          }, "reveal2")
  
          .from(".content-image", duration, {
            opacity: 0
          }, "reveal2")
          .to(".content-info-description", duration, {
            opacity: 1,
            transformOrigin: "left"
          }, "reveal2");
  
  
      },
      getWidth: function() {
        var box = document.querySelector('.content-info-heading');
        var width = box.offsetWidth;
        console.log("the width is " + width);
  
  
  
  
      }
  
  
  
  
    }
  }
</script>


<style scoped lang="scss">

.container-what{
  display: flex;
    flex-direction: row;
   padding: 0px 50px;
     margin-top:30px;
     height:600px;

}
 
  
  .content-image-container {
    flex: 1;
    height: 600px;
    margin-right: 50px;
    position: relative;
  }
  
  img {
    height: 65vh;
    width: 100%;
  }
  
  .content-image {
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
  
  .content-info-heading-container {
    display: inline-flex;
  flex-direction: column;
  }
  
  .content-info {
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
      margin-top: 30px;
      opacity: 0;
      @include respond(big-desktop) {
        font-size: 14px;
        line-height: 22px;
        letter-spacing: .02em;
      }
    }
  }
  

</style>