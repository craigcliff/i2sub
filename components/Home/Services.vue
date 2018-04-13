<template>
    <section class="services-main">
        <h2 class="services-title">What we do</h2>
        <div class="card-services">
    
            <div class="card1" @mouseover="startChangeImage(1) "  @mouseleave="stopChangeImage()">
                <div class="card-inner">
                    <h2 class="card-title1">Lab Testing </h2>
                    <p class="card-description1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
    
    
            </div>
           
            <div class="card card2" >
                <div class="card-inner">
                    <h2 class="card-title">Contaminated Land </h2>
                    <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
    
            </div>
            <div class="card card3">
                <div class="card-inner">
                    <h2 class="card-title">Site Investigation </h2>
                    <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
    
            <div class="card card4">
                <div class="card-inner">
                    <h2 class="card-title">Geological Consultancy </h2>
                    <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div class="card card5">
                <div class="card-inner">
                    <h2 class="card-title">Drilling </h2>
                    <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
    
            </div>
            <div class="card card6">
                <div class="card-inner">
                    <h2 class="card-title">Oil and Gas Services </h2>
                    <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
    
            </div>
            <!-- <div class = "card"> <img src="~/assets/bg2.jpg" alt="Sample photo"></div>
                  <div class = "card"><img src="~/assets/bg2.jpg" alt="Sample photo"></div>
                  <div class = "card"><img src="~/assets/bg2.jpg" alt="Sample photo"></div>
                  <div class = "card"><img src="~/assets/bg2.jpg" alt="Sample photo"></div>
                 <div class = "card"> <img src="~/assets/bg2.jpg" alt="Sample photo"></div> -->
    
        </div>
    </section>
</template>



<script>
import { TweenMax } from "gsap";

import Text from "gsap/TextPlugin";
import TimelineMax from "gsap/TimelineMax";

import Slider from "@/components/Home/Slider.vue";
import Services from "@/components/Home/Services.vue";
import Bottom from "@/components/Home/Bottom.vue";

export default {
  components: {
    Slider,
    Services,
    Bottom
  },

  data() {
    return {
        tracker:0,
      tl: new TimelineMax({
        paused: true

        //    reversed: false,
        //   repeat: -1,
        //   repeatDelay: 1
      })
    };
  },

  mounted() {

this.cardChange(1);

  },

  methods: {

      cardChange(num){
    this.tl
      .to(
        ".card-description"+num,
        1,
        {
          y: -20,
          autoAlpha: 1
        },
        1
      )
      .to(
        ".card-title"+num,
        0.5,
        {
          y:30
        },
        1
      );

},
    startChangeImage(num) {
      this.tl.play(num);
      console.log("Testing");
    },

    stopChangeImage() {
      this.tl.reverse();
    }
  }
};
</script>



<style scoped>
.services-main {
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.services-title {
  height: 15vh;
  font-size: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-services {
  height: 85vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.card {
 
}

.card1 {
     margin: 1px;
  background-size: cover;
  /* border: 3px solid #000; */
  /* box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3);  */
  min-width: 30vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("~/assets/lab1.jpg");
}

.card1:hover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~/assets/lab2.jpg");
}

.card2 {
     margin: 1px;
  background-size: cover;
  /* border: 3px solid #000; */
  /* box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3);  */
  min-width: 30vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("~/assets/contaminated1.jpg");
}

.card2:hover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~/assets/contaminated2.jpg");
}

.card3 {
     margin: 1px;
  background-size: cover;
  /* border: 3px solid #000; */
  /* box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3);  */
  min-width: 30vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("~/assets/site1.jpg");
}

.card3:hover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~/assets/site2.jpg");
}


.card4 {
     margin: 1px;
  background-size: cover;
  /* border: 3px solid #000; */
  /* box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3);  */
  min-width: 30vw;;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("~/assets/geo1.jpg");
}

.card4:hover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~/assets/geo2.jpg");
}

.card5 {
     margin: 1px;
  background-size: cover;
  /* border: 3px solid #000; */
  /* box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3);  */
  min-width: 30vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("~/assets/drilling1.jpg");
}

.card5:hover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~/assets/drilling2.jpg");
}

.card6 {
     margin: 1px;
  background-size: cover;
  /* border: 3px solid #000; */
  /* box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3);  */
  min-width: 30vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("~/assets/oil1.jpg");
}

.card6:hover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~/assets/oil2.jpg");
}



.card-inner {
  width: 26vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
}

.card1:hover .card-inner {
  border: groove black 5.5px;
}

.card-title {
  margin-bottom: 20px;
  flex: 1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-description {
  width: 200px;
  display: flex;
  opacity: 0;
  flex-direction: column;
  text-align: center;
  flex: 1;
  color: white;
}

.card-title1 {
  margin-bottom: 20px;
  flex: 1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-description1 {
  width: 200px;
  display: flex;
  opacity: 0;
  flex-direction: column;
  text-align: center;
  flex: 1;
  color: white;
}
</style>




