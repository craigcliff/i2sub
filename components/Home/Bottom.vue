<template>

<section class="container"> 
  
  
<Arrow v-scroll-to="'.services-title'"/>

</section>
    
</template>


<style scoped>

.container{

height: 35.5vh;
    display: flex;
    background-color: #eee9e9;
    background-image: #eee9e9;
    background-image: #eee9e9;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
justify-content: center;
  align-items: center;
  
}

.btn-click{
position: relative;
top:30px;
width:100px;
height:100px;
opacity:0;
cursor: pointer; 


}

    
</style>

<script>

 
  import Arrow from "@/components/Home/Arrow.vue"
  
  export default {
    components: {
      Arrow
    }
  
  
  
     
  
  }
</script>