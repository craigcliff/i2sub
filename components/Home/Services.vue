<template>
    <section class="services-main">
        <h2 class="services-title">What we do</h2>
        <div class="card-services">
           
            <div class="card card1" @mouseover="startChangeImage"  @mouseleave="stopChangeImage">
                <div class = "card-inner">
                <h2 class="card-title">Lab Testing </h2>
                <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
    
    
            </div>
            <div class="card card2">
                <div class = "card-inner">
                <h2 class="card-title">Contaminated Land </h2>
                <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
    
            </div>
            <div class="card card3">
    <div class = "card-inner">
                <h2 class="card-title">Site Investigation </h2>
                <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
            </div>
    
            <div class="card">
    <div class = "card-inner">
                <h2 class="card-title">Geological Consultancy </h2>
                <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
            </div>
            <div class="card">
                <div class = "card-inner">
                <h2 class="card-title">Drilling </h2>
                <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    
            </div>
            <div class="card">
                <div class = "card-inner">
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
        </div>
    </section>
</template>



<script>

import {
  
    TweenMax
  
  } from "gsap";

  import Text from "gsap/TextPlugin"
  import TimelineMax from "gsap/TimelineMax";

  import Slider from "@/components/Home/Slider.vue"
  import Services from "@/components/Home/Services.vue"
  import Bottom from "@/components/Home/Bottom.vue"
  
  export default {
    components: {
      Slider,
      Services,
      Bottom
    },
  
  
  
    data() {
  
      return {
  
  
  tl: new TimelineMax({
  
          paused: true,
  
      //    reversed: false,
        //   repeat: -1,
        //   repeatDelay: 1
  
        })
  
  
  
  
      }
    },
  
    mounted() {
  


       this.tl.to(".card-description", 0.5, {
            y: -20,
            autoAlpha: 1
          },0.1).

          to(".card-title", 0.5, {
            y: 20
           
          },0.1)

  

     
  
  
  
  
  
    },
  
    methods: {
  
  
   startChangeImage() {
            this.tl.play();
            console.log("Testing");
        },

        stopChangeImage() {
            this.tl.reverse();
        },
  
  
    }
  
  
  
  
  
  
  
  
  
  
  }
</script>



<style   scoped>

.services-main{
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
        margin: 1px;
      
        
        background-size: cover;
        /* border: 3px solid #000; */
        /* box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3);  */
        width: 460px;
        height: 50vh;
        display: flex;
        flex-direction: column;
    justify-content: center;
        align-items: center;
          transition: all 1s ease-in-out;
    }

    .card1{
  background-image: 
    linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("~/assets/lab1.jpg");


    }

    .card1:hover {
 background-image: 
     linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url("~/assets/lab2.jpg");

    }

       .card2{
  background-image: 
    linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("~/assets/contaminated1.jpg");


    }

    .card2:hover {
 background-image: 
     linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url("~/assets/contaminated2.jpg");

    }

     .card3{
  background-image: 
    linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("~/assets/site1.jpg");


    }

    .card3:hover {
 background-image: 
     linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url("~/assets/site2.jpg");

    }

    .card-inner{

width: 400px;
        height: 40vh;
        display: flex;
        flex-direction: column;
    justify-content: center;
        align-items: center;
      
        transition: all 0.2s;


    }

    .card1:hover .card-inner{

 border: solid black 1.5px;

    }











    .card-title{
        margin-bottom: 20px;
        flex: 1;
        color: white;
display: flex;
  justify-content: center;
        align-items: center;

   }


    .card-description{
        width: 200px;
        display: flex;
        opacity: 0;
        flex-direction: column;
  text-align: center;

flex: 1;
color: white;

    }


    
</style>




