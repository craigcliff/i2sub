<<template>

 <section class="container3">
  
     <div class ="slider-info">
     <span class="dot" v-on:click="first">01</span>
  <div class="vl"></div>
  <span class="dot" v-on:click="middle">02</span>
  <div class="vl"></div>
  <span class="dot" v-on:click="last">03</span>
 
         <h1 class ="slider-heading1"> Sample Heading </h1>
         <h3 class ="slider-desc1">More Sample Text</h3>
         <h1 class ="slider-heading2"> Sample Heading2 </h1>
         <h3 class ="slider-desc2">More Sample Text2</h3>
         <h1 class ="slider-heading3"> Sample Heading3 </h1>
         <h3 class ="slider-desc3">More Sample Tex3</h3>
         </div>

          
      </div>   
       
        
         
          </div>
     <div class ="slider-image-container"> 
         <div class ="slider-image"> </div>
        <div class ="slider-image2"> </div>


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


.slider-heading1{
font-size: 50px;
position: absolute;
top:250px;

opacity: 0;




}

.slider-desc1{

font-size: 30px;
position: absolute;
top:330px;

opacity: 0;;


}

.slider-heading2{
font-size: 50px;
position: absolute;
top:250px;
opacity: 0;



}

.slider-desc2{

font-size: 30px;
position: absolute;
top:330px;
opacity: 0;





}

.slider-heading3{
font-size: 50px;
position: absolute;
top:250px;
opacity: 0;



}

.slider-desc3{

font-size: 30px;
position: absolute;
top:330px;
opacity: 0;



}
.slider-image-container{

flex: 1 0 50%;

}

.slider-image{
   
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

.slider-image2{
   
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
  
  
  
  export default {

      data(){
  
  return {
 menuToggle: new TimelineMax({
  
          paused: false,
  
          reversed: false,
          repeat: -1,
          repeatDelay:1
  
        })


  }
      },

      mounted(){

this.menuToggle
  
         .to('.slider-image',2, {x:-20,autoAlpha:1,display:"block"},'first')
       
        .to('.slider-heading1',0.5,{y:-50, autoAlpha: 1, ease:Power3.easeIn},'-=1')
         .to('.slider-desc1',0.6,{y:-50, autoAlpha: 1,  ease:Power3.easeIn},'-=1')
         .to('.slider-image',0.7, {autoAlpha:0,display:"none", delay:7},'-=2')
         .to('.slider-heading1',0.3,{y:-10, autoAlpha: 0},'-=0.7')
         .to('.slider-desc1',0.3,{y:-10, autoAlpha: 0},'-=0.7')

 .to('.slider-image2',2, {x:-20,autoAlpha:1,display:"block"},'middle')
       
        .to('.slider-heading2',0.5,{y:-50, autoAlpha: 1, ease:Power3.easeIn},'-=1')
         .to('.slider-desc2',0.6,{y:-50, autoAlpha: 1,  ease:Power3.easeIn},'-=1')
         .to('.slider-image2',0.7, {autoAlpha:0,display:"none", delay:7},'-=2')
         .to('.slider-heading2',0.3,{y:-10, autoAlpha: 0},'-=0.7')
         .to('.slider-desc2',0.3,{y:-10, autoAlpha: 0},'-=0.7')


          .to('.slider-image',2, {x:-20,autoAlpha:1,display:"block"},'end')
       
       .to('.slider-heading3',0.5,{y:-50, autoAlpha: 1, ease:Power3.easeIn},'-=1')
         .to('.slider-desc3',0.6,{y:-50, autoAlpha: 1,  ease:Power3.easeIn},'-=1')
         .to('.slider-image3',0.7, {autoAlpha:0,display:"none", delay:7},'-=2')
         .to('.slider-heading3',0.3,{y:-10, autoAlpha: 0},'-=0.7')
         .to('.slider-desc3',0.3,{y:-10, autoAlpha: 0},'-=0.7')
         
         ;

       
         if (this.menuToggle.play('first')){

            console.log("first")
         }
            else if (this.menuToggle.play('middle'))
            {

            console.log("middle")
         }
else if (this.menuToggle.play('last'))
            {

            console.log("last")
         }


      },

      methods: {

first: function () {

  this.menuToggle.play('first');
      
    },
    middle: function () {

  this.menuToggle.play('middle');
      
    },
    last: function () {

  this.menuToggle.play('last');
      
    },

   




        
      },
    watch: {
    'selected': {
        menuToggle: function (val, oldVal) {
            console.log('watch 1', 'newval: ', val, '   oldVal:', oldVal)
        },
        deep: true
    }
}


      }


     
  
  
  
</script>