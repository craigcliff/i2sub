<template>
  <section class="services-main">
    <h2 class="services-title">What we do</h2>
  
    <div class="card-services">
      <div class="card card1">
        <div class="card-inner card-inner1">
          <h2 class="card-title card-title1">Testing 1234</h2>
          <p class="card-description card-description1">asfsadfdsaffdsa </p>
        </div>
  
      </div>
  
  
  
  
      <div class="card card2">
        <div class="card-inner card-inner2">
          <h2 class="card-title card-title2">Testing 1234</h2>
          <p class="card-description card-description2">asfsadfdsaffdsa </p>
        </div>
  
  
      </div>
  
  
      <div class="card card3">
        <div class="card-inner card-inner3">
          <h2 class="card-title card-title3">Testing 1234</h2>
          <p class="card-description card-description3">asfsadfdsaffdsa </p>
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
    min-width: 30vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;
    &-services {
      height: 85vh;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    &1 {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("~/assets/lab1.jpg");
      &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("~/assets/lab2.jpg");
      }
    }
    &2 {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("~/assets/lab1.jpg");
      &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("~/assets/lab2.jpg");
      }
    }
    &3 {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("~/assets/lab1.jpg");
      &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("~/assets/lab2.jpg");
      }
    }
    &-inner{

width: 26vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

&1 {
    transition: all 1s;
  }
  
  &2 {
    transition: all 1s;
  }
  
  &3 {
    transition: all 1s;
  }



    }

  }
  
  
  
  
  .card1:hover .card-inner1 {
    border: groove black 5.5px;
  }
  
  .card2:hover .card-inner2 {
    border: groove black 5.5px;
  }
  
  .card3:hover .card-inner3 {
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
  
  .card-title1 {
    transition: all 1s;
  }
  
  .card-title2 {
    transition: all 1s;
  }
  
  .card-title3 {
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
  
  .card-description1 {
    transition: all 1s;
  }
  
  .card-description2 {
    transition: all 1s;
  }
  
  .card-description3 {
    transition: all 1s;
  }
  
  .card1:hover .card-description1 {
    opacity: 1;
    transform: translateY(-10px);
  }
  
  .card2:hover .card-description2 {
    opacity: 1;
    transform: translateY(-10px);
  }
  
  .card3:hover .card-description3 {
    opacity: 1;
    transform: translateY(-10px);
  }
  
  .card1:hover .card-title1 {
    transform: translateY(10px);
  }
  
  .card2:hover .card-title2 {
    transform: translateY(10px);
  }
  
  .card3:hover .card-title3 {
    transform: translateY(10px);
  }
</style>




