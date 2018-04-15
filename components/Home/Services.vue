<template>
  <section class="services-main">
    <h2 class="services-title">What we do</h2>
  
    <div class="card-services">
      <div class="card card1">
        <div class="card-inner card1-inner">
          <h2 class="card-title card1-title">Testing 1234</h2>
          <p class="card-description card1-description">asfsadfdsaffdsa </p>
        </div>
  
      </div>
  
  
  
  
      <div class="card card2">
        <div class="card-inner card2-inner">
          <h2 class="card-title card2-title">Testing 1234</h2>
          <p class="card-description card2-description">asfsadfdsaffdsa </p>
        </div>
  
  
      </div>
  
  
      <div class="card card3">
        <div class="card-inner card3-inner">
          <h2 class="card-title card3-title">Testing 1234</h2>
          <p class="card-description card3-description">asfsadfdsaffdsa </p>
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
    flex-direction: column;
    flex-wrap: wrap;
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
  }
  
  .card:hover {}
  
  .card1 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("~/assets/lab1.jpg");
  }
  
  .card1:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("~/assets/lab2.jpg");
  }
  
  .card2 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("~/assets/lab1.jpg");
  }
  
  .card2:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("~/assets/lab2.jpg");
  }
  
  .card3 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("~/assets/lab1.jpg");
  }
  
  .card3:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("~/assets/lab2.jpg");
  }
  
  .card-inner {
    width: 26vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .card1-inner {
    transition: all 1s;
  }
  
  .card2-inner {
    transition: all 1s;
  }
  
  .card3-inner {
    transition: all 1s;
  }
  
  .card1:hover .card1-inner {
    border: groove black 5.5px;
  }
  
  .card2:hover .card2-inner {
    border: groove black 5.5px;
  }
  
  .card3:hover .card3-inner {
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
  
  .card1-title {
    transition: all 1s;
  }
  
  .card2-title {
    transition: all 1s;
  }
  
  .card3-title {
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
  
  .card1-description {
    transition: all 1s;
  }
  
  .card2-description {
    transition: all 1s;
  }
  
  .card3-description {
    transition: all 1s;
  }
  
  .card1:hover .card1-description {
    opacity: 1;
    transform: translateY(-10px);
  }
  
  .card2:hover .card2-description {
    opacity: 1;
    transform: translateY(-10px);
  }
  
  .card3:hover .card3-description {
    opacity: 1;
    transform: translateY(-10px);
  }
  
  .card1:hover .card1-title {
    transform: translateY(10px);
  }
  
  .card2:hover .card2-title {
    transform: translateY(10px);
  }
  
  .card3:hover .card3-title {
    transform: translateY(10px);
  }
</style>




