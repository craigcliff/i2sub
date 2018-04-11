<<template>

 <section class="container3">
  
     <div class ="slider-info">
     <span class="dot slider1-dot " v-on:click="first">01</span>
  <div class="vl"></div>
  <span class="dot slider2-dot " v-on:click="middle">02</span>
  <div class="vl"></div>
  <span class="dot slider3-dot " v-on:click="last">03</span>
 
         <h1 class ="slider1-heading"> Sample Heading </h1>
         <h3 class ="slider1-desc">More Sample Text</h3>
    <div class = "slider1-btn"> <buttonMain/> </div>
         <h1 class ="slider2-heading"> Sample Heading2 </h1>
         <h3 class ="slider2-desc">More Sample Text2</h3>
           <div class = "slider2-btn"> <buttonMain/> </div>
         <h1 class ="slider3-heading"> Sample Heading3 </h1>
         <h3 class ="slider3-desc">More Sample Tex3</h3>
          <div class = "slider3-btn"> <buttonMain/> </div>
         </div>

          
      </div>   
       
        
         
          </div>
     <div class ="slider-image-container"> 
         <div class ="slider1-image"> </div>
        <div class ="slider2-image"> </div>


     </div>

    <button v-on:click="first">first</button>
     <button v-on:click="middle">middle</button>
      <button v-on:click="last">last</button>
  </section>

    
</template>


<style>

.container3
{
  height: 60vh;
  display: flex;
      
   
 
background-color:  #dde6ef; 

  background-image:#dde6ef; 

  background-image: #dde6ef; 

 background-position: 50% 50%; 
    background-repeat: no-repeat;
    background-size: 100% 100%;

 /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,f3f3f3+50,ededed+51,ffffff+100;White+Gloss+%232 */




}

.dot {
  height: 25px;
  width: 25px;
  background-color: transparent;
  border-radius: 50%;
  display: inline-block;
  padding-top: 25px;
  padding-bottom:10px;
  position:relative;
  left: -150px;
  top: -15px;
 text-align: center;

}

.slider1-dot {

    fontWeight: 200;
color:grey;
}
.slider2-dot {

    fontWeight: 200;
color:grey;
}
.slider3-dot {

    fontWeight: 200;
color:grey;
}
.vl {
    border-left: 1px solid grey;
    height: 70px;
    position:relative;
  left: -137px;
  padding-top:4px;
}

.slider-info{

flex: 1 0 50%;
display: flex;
flex-direction: column;
padding-left: 200px;
justify-content: center;

  
  
  

}


.slider1-heading{
font-size: 50px;
position: absolute;
top:250px;

opacity: 0;




}

.slider1-desc{

font-size: 30px;
position: absolute;
top:330px;

opacity: 0;


}

.slider1-btn{
position: absolute;
top:400px;
opacity: 0;

}

.slider2-heading{
font-size: 50px;
position: absolute;
top:250px;
opacity: 0;



}

.slider2-desc{

font-size: 30px;
position: absolute;
top:330px;
opacity: 0;





}

.slider2-btn{
position: absolute;
top:400px;
opacity: 0;
}

.slider3-heading{
font-size: 50px;
position: absolute;
top:250px;
opacity: 0;



}

.slider3-desc{

font-size: 30px;
position: absolute;
top:330px;
opacity: 0;



}

.slider3-btn{
position: absolute;
top:400px;
opacity: 0;
}
.slider-image-container{

flex: 1 0 50%;

}

.slider1-image{
   
background-image: url("~/assets/bg3.jpg"); 
background-position: 50% 50%; 
    background-repeat: no-repeat;
    background-size: 100% 100%;
margin-top: 60px;
margin-left:60px;
height: 100%;
width: 85%;
 visibility:hidden;
 display: none;



}

.slider2-image{
   
background-image: url("~/assets/bg2.jpg"); 
background-position: 50% 50%; 
    background-repeat: no-repeat;
    background-size: 100% 100%;
margin-top: 60px;
margin-left:60px;
height: 100%;
width: 85%;
 visibility:hidden;
 display: none;


}

    
</style>


<script>
  import {
  
    TweenMax
  
  } from "gsap";
  
  import TimelineMax from "gsap/TimelineMax";
  import buttonMain from "@/components/Layout/button.vue"
  
  
  export default {
 components: {
    buttonMain
  },



      data(){
  
  return {




tl: new TimelineMax({
  
          paused: false,
  
          reversed: false,
          repeat: -1,
          repeatDelay:1
  
        }),
        animation2: new TimelineMax({
  
          paused: false,
  
          reversed: false,
          repeat: -1,
          repeatDelay:1
  
        }),
        animation3: new TimelineMax({
  
          paused: false,
  
          reversed: false,
          repeat: -1,
          repeatDelay:1
  
        }),
         master: new TimelineMax({
  
          paused: false,
  
          reversed: false,
          repeat: -1,
          repeatDelay:1
  
        })


  }
      },

      mounted(){

this.master
.add(this.createPanel(".slider1"), "slide1")
.add(this.createPanel(".slider2"), "slide2")

.add(this.createPanel(".slider3"), "slide3");

//this.animation();
        
        // this.createPanel(".slider1");
        // this.createPanel(".slider2");
        // this.createPanel(".slider3");



//       this.animation2 
//        .to('.slider-image2',2, {x:-20,autoAlpha:1,display:"block"},'middle')
//         .to('.slider-heading2',0.5,{y:-50, autoAlpha: 1, ease:Power3.easeIn},'-=1')
//          .to('.slider-desc2',0.6,{y:-50, autoAlpha: 1,  ease:Power3.easeIn},'-=1')
//        .to('.slider-image2',0.7, {autoAlpha:0,display:"none", delay:7},'-=2');
// //          .to('.slider-heading2',0.3,{y:-10, autoAlpha: 0},'-=0.7')
// //          .to('.slider-desc2',0.3,{y:-10, autoAlpha: 0},'-=0.7');

// this.animation3 
//           .to('.slider-image',2, {x:-20,autoAlpha:1,display:"block"},'end')
       
//        .to('.slider-heading3',0.5,{y:-50, autoAlpha: 1, ease:Power3.easeIn},'-=1')
//          .to('.slider-desc3',0.6,{y:-50, autoAlpha: 1,  ease:Power3.easeIn},'-=1')
//          .to('.slider-image3',0.7, {autoAlpha:0,display:"none", delay:7},'-=2')
//          .to('.slider-heading3',0.3,{y:-10, autoAlpha: 0},'-=0.7')
//          .to('.slider-desc3',0.3,{y:-10, autoAlpha: 0},'-=0.7');

     
    //.add(this.animation2)
  //      .add(this.animation3);
             

       
  


      },

      methods: {

            createPanel: function(panel) {

 this.tl.to(panel + '-dot', 0.5,  {fontWeight: 1000,color: "#b87333"})
         .to(panel +'-image',2, {x:-20,autoAlpha:1,display:"block"})
       
        .to(panel + '-heading',0.5,{y:-50, autoAlpha: 1, ease:Power3.easeIn},'-=1')
         .to(panel + '-desc',0.6,{y:-50, autoAlpha: 1,  ease:Power3.easeIn},'-=1')
         .to(panel + '-btn',0.6,{y:-50, autoAlpha: 1,  ease:Power3.easeIn},'-=1')
          .to(panel + '-image',0.7, {autoAlpha:0,display:"none", delay:7},'-=2')
         .to(panel + '-heading',0.3,{y:-10, autoAlpha: 0},'-=0.7')
         .to(panel + '-desc',0.3,{y:-10, autoAlpha: 0},'-=0.7')
         .to(panel + '-btn',0.3,{y:-10, autoAlpha: 0},'-=0.7')
         .set(panel + '-dot', {clearProps:"all"})
       //  .addPause()
         

         return this.tl;

        

    },

  

    







first: function () {

  
  
  this.master.play(1);

      
    },
    middle: function () {

  //this.master.seek(this.createPanel(".slider2"));

      
    },
    last: function () {

 //this.master.add(this.createPanel(".slider3"))
 //.play();
      
    },

   




        
      }


      }


     
  
  
  
</script>