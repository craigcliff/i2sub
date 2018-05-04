<template>
  <section class="main-home">
    <div class="bg-home" v-bind:class="{'bg-home-after':(navState==true)}">
      
  
      <!-- <router-link to="/about">
            
            </router-link> -->
    </div>

    <div class="logo-main" :class="{'logo-main-after':(navState==true)}">
        <logo/>
  
      </div>
  
  
      <div class="arrow" v-on:click="setNavToTrue" :class="{'arrow-after':(navState==true)}">
        <Arrow/>
  
  
      </div>

  
    <div class="blog-section">
  
      <div class="blog-spotlight" :class="{'blog-spotlight-after':(navState==true)}">
        <h1 class="spotlight-heading">In the Spotlight </h1>
        <div class="spotlight-image"> </div>
        <div class="spotlight-info">
  
  
          <b>“Comply or Close”- the New Reality for Industrial Facilities in China </b>
  
          <br><br><br> Chinese Authorities are increasingly shifting their focus from permitting of industrial facilities to ensuring operational compliance. Recent State Council reforms have pursued the parallel objectives of simplifying “green tape” associated
          with environmental permitting of new industrial developments while at the same time implementing supervision measures to promote operational compliance with environmental regulations for existing facilities.
          <br><br><br> These changes mark a significant departure from the Ministry of Environmental Protection’s (MEP) long-standing policy of focusing on permitting and approvals for new facilities with minimal monitoring of environmental compliance over
          the operational life of industrial facilities.
          <br><br><br> Plant Managers at industrial facilities in China have long known that failing to abide by environmental standards set by MEP is unlikely to land them in hot water. With few resources available to monitor facilities themselves, local
          authorities have generally left industrial facilities to self-report discharges to the environment with minimal supervision. The result has been a steady deterioration in the environment that has accompanied China’s industrial development. That
          changed earlier this year. Self-reporting is out and Central Government Inspections are in as China’s MEP gets tough on polluting facilities.
  <br><br><br>
  Read more
  
  
  
  
  
        </div>
      </div>
  
      <div class="blog-insights" :class="{'blog-insights-after':(navState==true)}">
        <h1 class="insights-heading"> Recent Insights </h1>
        <div class="insights-image"> </div>
        <div class="insights-info">
  
  
          <b> ERM Insights: Managing Business Risks with Effective Product Stewardship</b>
  
          <br><br><br> This collection of four white papers offer pragmatic insights into common challenges that can present substantial business risks. In regards to product stewardship, societal norms are driving the demand for safer, more environmentally
          sound products, and this trend is reflected in evolving global policies.
  
          <br><br><br> Find out more 
                 <br><br><br>
          The recipe for ESG success: A survey by ERM demonstrates how ESG factors are being used to create value
  
          <br><br><br> Just how important are environmental, social and governance factors in driving value? Very, suggests ERM’s latest survey of worldwide investors.
          <br><br><br> Find out more
                 <br><br><br>
           ERM Video: iSafetyCase Demo ERM now offers the iSafetyCase, a web-based system that allows operators to manage, enhance and operationalise Safety Cases across multiple assets.
  
  
  
        </div>
      </div>
  
      <div class="blog-news" :class="{'blog-news-after':(navState==true)}">
        <h1 class="news-heading">News and Events </h1>
        <div class="insights-info">
        <ul>
          
          <li>                        ERM develops SDG Sector Roadmap guidelines with WBCSD </li>
           <li>                        ERM announces acquisition of BrownFlynn, Ltd. </li>
           <li>                        ERM publishes paper on Climate change risk: the new investment fundamental </li>
           <li>  ERM develops SDG Sector Roadmap guidelines with WBCSD </li>
           <li> ERM announces acquisition of BrownFlynn, Ltd.</li>
           <li>  ERM develops SDG Sector Roadmap guidelines with WBCSD </li>
           <li>                        ERM publishes paper on Climate change risk: the new investment fundamental </li>
           </ul>
           </div>
  
      </div>
  
  
  
  
  
  
  
    </div>
  
  </section>
</template>



<script>
import TimelineMax from "gsap/TimelineMax";
import { TweenMax } from "gsap";

import Logo from "~/components/Logo.vue";
import Arrow from "@/components/Home/Arrow.vue";
import { mapState } from "vuex";

export default {
  layout: "layout3",
  components: {
    Logo,
    Arrow
  },

  data() {
    return {
      tl: new TimelineMax({
        paused: false,

        reversed: false,
        repeat: -1,
        repeatDelay: 1
      })
    };
  },

  mounted() {
    this.setNavToFalse();
    this.moveBackground();
    
  },
  computed: {
    navState() {
      console.log(this.$store.state.navState);
      return this.$store.state.navState;
    }
  },

  methods: {
    setNavToFalse: function() {
      this.$store.commit("navStateFalse");
      this.moveBackground();
      this.tl.play();
      
    },

    setNavToTrue: function() {
      this.$store.commit("navStateTrue");
      this.tl.pause();
   
    },
    moveBackground: function() {
      var spd = 75;
  this.tl.from("#path7385", 1, {fill:"black", delay:0.5});

  this.tl.from("#svg7275", 1, {width:3000, height: 13000, scale:300});
      this.tl.to(".bg-home", spd, { scale: 1.6, x: -400 });
      this.tl.to(".bg-home", spd, { scale: 1, x: 0 });
      this.tl.to(".bg-home", spd, { scale: 1.6, x: +400 });
    
    },

    readRefs: function(){

      console.log(this.$refs.svgLogo1234);
    }
  }
};
</script>






<style lang="scss" scoped>

button{
  position: relative;

}
.main-home {
  height: 100vh;
}

.bg-home {
  padding: 0px 0px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(
      to top right,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("~/assets/bg2.jpg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-home-after {
  height: 60vh;
  background-image: linear-gradient(
      to top right,
      rgba(46, 32, 32, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("~/assets/bg2.jpg");
  transition: all 0.6s;
  background-position: bottom;
}

.logo-main {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 40vh;
}

.logo-main-after {
  display: none;
}

.arrow {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 80vh;
}

.arrow-after {
  display: none;
}

.blog-section {
  padding: 0px 50px;
  padding-top: 100px;
  display: flex;
}

.blog-spotlight {
  flex: 2;
}

.blog-insights {
  flex: 2;
}

.blog-news {
  flex: 1;
}

.blog-spotlight,
.blog-insights,
.blog-news {
  display: none;
  flex-direction: column;
  margin: 15px;
  border: 1.5px lightgrey solid;
  border-radius: 5px;
}

.blog-spotlight-after,
.blog-insights-after,
.blog-news-after {
  transition: all 1s;
  display: flex;
}

.spotlight-heading,
.insights-heading,
.news-heading {
  background: linear-gradient(
    to bottom,
    rgba(221, 230, 239, 1) 0%,
    rgba(181, 198, 208, 1) 51%,
    rgba(221, 230, 239, 1) 77%,
    rgba(224, 239, 249, 1) 100%
  );
  height: 5vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.news-heading {
  background: linear-gradient(
    to bottom,
    rgba(242, 246, 248, 1) 0%,
    rgba(255, 255, 255, 1) 4%,
    rgba(227, 227, 227, 1) 99%,
    rgba(224, 239, 249, 1) 100%
  );
}

.spotlight-image,
.insights-image {
  background-image: url("~/assets/bg1.jpg");
  height: 20vh;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 30px;
}

.insights-image {
  background-image: url("~/assets/bg4.jpg");
}

.spotlight-info,
.insights-info,
.news-info {
  margin: 30px;
  text-align: justify;
}

li {
  margin-bottom: 10px;
}


</style>
