<<template>

 <section class="container3">
     <div class ="slider-info">
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

.slider-info{

flex: 1 0 50%;
display: flex;
flex-direction: column;
justify-content: center;
  align-items: center;
  
  
  

}


.slider-heading1{
font-size: 50px;
position: absolute;
opacity: 0;


}

.slider-desc1{

font-size: 30px;
position: absolute;
top: 350px;
opacity: 0;

}

.slider-heading2{
font-size: 50px;
position: absolute;
opacity: 0;


}

.slider-desc2{

font-size: 30px;
position: absolute;
top: 350px;
opacity: 0;



}

.slider-heading3{
font-size: 50px;
position: absolute;
opacity: 0;



}

.slider-desc3{

font-size: 30px;
position: absolute;
top: 350px;
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
  
         .to('.slider-image',2, {x:-20,autoAlpha:1,display:"block"})
       
        .to('.slider-heading1',2,{y:-10, autoAlpha: 1},'-=1')
         .to('.slider-desc1',0.3,{y:-10, autoAlpha: 1},'-=1')
         .to('.slider-image',0.7, {autoAlpha:0,display:"none", delay:7},'-=2')
         .to('.slider-heading1',0.3,{y:-10, autoAlpha: 0},'-=0.7')
         .to('.slider-desc1',0.3,{y:-10, autoAlpha: 0},'-=0.7')

 .to('.slider-image2',2, {x:-20,autoAlpha:1,display:"block"})
       
        .to('.slider-heading2',2,{y:-10, autoAlpha: 1},'-=1')
         .to('.slider-desc2',0.3,{y:-10, autoAlpha: 1},'-=1')
         .to('.slider-image2',0.7, {autoAlpha:0,display:"none",  delay:7})
         .to('.slider-heading2',0.3,{y:-10, autoAlpha: 0},'-=0.7')
         .to('.slider-desc2',0.3,{y:-10, autoAlpha: 0},'-=0.7')


          .to('.slider-image',2, {x:-20,autoAlpha:1,display:"block"})
       
        .to('.slider-heading3',2,{y:-10, autoAlpha: 1},'-=1')
         .to('.slider-desc3',0.3,{y:-10, autoAlpha: 1},'-=1')
         .to('.slider-image',0.7, {autoAlpha:0,display:"none",  delay:7})
         .to('.slider-heading3',0.3,{y:-10, autoAlpha: 0},'-=0.7')
         .to('.slider-desc3',0.3,{y:-10, autoAlpha: 0},'-=0.7')
         
         ;

       




      }


     
  
  
  }
</script>