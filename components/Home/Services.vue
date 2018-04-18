<template>
  <section class="services-main">
    <h2 class="services-title">What we do</h2>
  
    <div class="card-services">
      <div class="card card1">
        <div class="card-inner card-inner1">
          <h2 class="card-title card-title1">Lab Testing</h2>
          <p class="card-description card-description1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
  
      </div>
  
  
  
  
      <div class="card card2">
        <div class="card-inner card-inner2">
          <h2 class="card-title card-title2">Geological Consultancy</h2>
          <p class="card-description card-description2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
  
  
      </div>
  
  
      <div class="card card3">
        <div class="card-inner card-inner3">
          <h2 class="card-title card-title3">Oil and Gas Services</h2>
          <p class="card-description card-description3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
  
      </div>

        <div class="card card4">
        <div class="card-inner card-inner4">
          <h2 class="card-title card-title4">Site Investigation</h2>
          <p class="card-description card-description4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
  
      </div>

        <div class="card card5">
        <div class="card-inner card-inner5">
          <h2 class="card-title card-title5">Drilling</h2>
          <p class="card-description card-description5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
  
      </div>

        <div class="card card6">
        <div class="card-inner card-inner6">
          <h2 class="card-title card-title6">Contaminated Land</h2>
          <p class="card-description card-description6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
  
      </div>
    </div>
  
  
  </section>
</template>



<script>
  export default {
    components: {
  
    },
  
    data() {
      return {
  
  
  
  
      }
  
  
  
    }
  
  
  }
</script>



<style lang='scss' scoped>
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


  
  .card {
    margin: 1px;
    background-size: cover;
    max-width: 33vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;

    &-services {
      height: 85vh;
      flex: 100vw;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items:center;
    }
    &1 {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("~/assets/lab1.jpg");
      &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("~/assets/lab2.jpg");
      }
    }
    &2 {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("~/assets/geo1.jpg");
      &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("~/assets/geo2.jpg");
      }
    }
    &3 {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("~/assets/oil1.jpg");
      &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("~/assets/oil2.jpg");
      }
    }
    &4 {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("~/assets/site2.jpg");
      &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("~/assets/site1.jpg");
      }
    }
    &5 {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("~/assets/drilling2.jpg");
      &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("~/assets/drilling1.jpg");
      }
    }
    &6 {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("~/assets/contaminated1.jpg");
      &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("~/assets/contaminated2.jpg");
      }
    }





    &-inner{

width: 26vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

&1,&2,&3,&4,&5,&6 {
    transition: all 1s;
  }
  
 



    }

  }
  
  
  
  
  .card1:hover .card-inner1,.card2:hover .card-inner2,.card3:hover .card-inner3,.card4:hover .card-inner4,.card5:hover .card-inner5,.card6:hover .card-inner6 {
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
  
  .card-title1, .card-title2,.card-title3,.card-title4,.card-title5,.card-title6  {
    transition: all 1s;
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
  
  .card-description1,.card-description2,.card-description3,.card-description4,.card-description5,.card-description6 {
    transition: all 1s;
  }
  
 
  
  .card1:hover .card-description1, .card2:hover .card-description2,.card3:hover .card-description3,.card4:hover .card-description4, .card5:hover .card-description5,.card6:hover .card-description6 {
    opacity: 1;
    transform: translateY(-10px);
  }
  
  
  
  .card1:hover .card-title1,  .card2:hover .card-title2,  .card3:hover .card-title3,.card4:hover .card-title4,  .card5:hover .card-title5,  .card6:hover .card-title6 {
    transform: translateY(10px);
  }
  
 
</style>




