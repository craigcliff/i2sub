<template>
  <div class="container-services" id="services">
    <section class="services-main">
      <h1 class="services-heading">Our Services</h1>
  
      <div class="card-main">
  
        <div class="card-main-services">
  
          <div class=" services-card services-card-1">
  
            <div class="services-card-image services-card-image1">
  
  
  
            </div>
            <div class="services-card-text-container">
              <div class="services-card-text">
                <h1 class="services-card-text-heading">
                  Drilling
  
  
                </h1>

                <div class ="services-card-line"> </div>
  
                <p class="services-card-text-desc">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                  content here', making it look like readable English. </p>
  
  
  
              </div>
  
  
  
            </div>
  
            <div class="services-card-button">
  
  
              <a href="#" class="myButton">Find out More</a>
  
  
  
            </div>
  
  
  
          </div>
  
          <div class=" services-card services-card-2">
  
            <div class="services-card-image services-card-image2">
  
  
  
            </div>
            <div class="services-card-text-container">
              <div class="services-card-text">
                <h1 class="services-card-text-heading">
                  Water Services
  
  
                </h1>

                <div class ="services-card-line"> </div>

  
                <p class="services-card-text-desc">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                  content here', making it look like readable English. </p>
  
  
  
              </div>
  
  
  
            </div>
  
            <div class="services-card-button">
  
  
              <a href="#" class="myButton">Find out More</a>
  
  
  
            </div>
  
  
  
          </div>
  
  
          <div class=" services-card services-card-3">
  
            <div class="services-card-image services-card-image3">
  
  
  
            </div>
            <div class="services-card-text-container">
              <div class="services-card-text">
                <h1 class="services-card-text-heading">
                  Geotechnical Services
  
  
                </h1>
  <div class ="services-card-line"> </div>
                <p class="services-card-text-desc">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                  content here', making it look like readable English. </p>
  
  
  
              </div>
  
  
  
            </div>
  
            <div class="services-card-button">
  
  
              <a href="#" class="myButton">Find out More</a>
  
  
  
            </div>
  
  
  
          </div>
  
          <div class=" services-card services-card-4">
  
            <div class="services-card-image services-card-image4">
  
  
  
            </div>
            <div class="services-card-text-container">
              <div class="services-card-text">
                <h1 class="services-card-text-heading">
                  Subsurface Characterization
  
  
                </h1>
  <div class ="services-card-line"> </div>
                <p class="services-card-text-desc">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                  content here', making it look like readable English. </p>
  
  
  
              </div>
  
  
  
            </div>
  
            <div class="services-card-button">
  
  
              <a href="#" class="myButton">Find out More</a>
  
  
  
            </div>
  
  
  
          </div>
  
         <div class=" services-card services-card-5">
  
            <div class="services-card-image services-card-image5">
  
  
  
            </div>
            <div class="services-card-text-container">
              <div class="services-card-text">
                <h1 class="services-card-text-heading">
                  Oil and Gas Services
  
  
                </h1>
  <div class ="services-card-line"> </div>
                <p class="services-card-text-desc">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                  content here', making it look like readable English. </p>
  
  
  
              </div>
  
  
  
            </div>
  
            <div class="services-card-button">
  
  
              <a href="#" class="myButton">Find out More</a>
  
  
  
            </div>
  
  
  
          </div>
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
  
      </div>
  
  
  
  
  
  
    </section>
  
  
  
  
  
    <drilling/>
    <water/>
    <geotechnical/>
    <subsurface/>
    <oilandgas/>
  
  
  </div>
</template>

<script>
  import drilling from "@/pages/services/drilling.vue";
  import water from "@/pages/services/water.vue";
  import geotechnical from "@/pages/services/geotechnical.vue";
  import subsurface from "@/pages/services/subsurface.vue";
  import oilandgas from "@/pages/services/oilgas.vue";
  export default {
    layout: "layout3",
  
    components: {
      drilling,
      water,
      geotechnical,
      subsurface,
      oilandgas
    }
  };
</script>


<style scoped lang="scss">
  .container-services {}
  
  .services-main {
    min-height:100vh;
    background: $color-secondary-light;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 50px;
  }
  
  .services-heading {
    height: 20%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
     margin-top: 100px;
margin-bottom: 20px;

    @include respond(big-desktop) {
      margin-top: 0px;
      

    }
  }

  .services-card-line{
 
    width: 80px;
    border-bottom:$color-secondary-light solid 1px;

  }
  
  .card-main {
    margin-top:10px;
    height: 80%;
    width: 100%;
    display: flex;
     
    &-services {
      flex: 1;
      display: flex;
      flex-wrap:wrap;
      align-items: center;
      justify-content: space-between;
    }
  }
  
  .services-card {
    
max-width: 230px;
    height: 450px;

@include respond(big-desktop) {
      max-width: 330px;
    height: 550px;
    }



    // border: 1px solid $color-secondary-dark;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    &-image {
      width: 100%;
      height: 50%;
   
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: 100% 100%;

      &1{
background-image:  url("~/assets/drilling1.jpg");

      }

      &2{

        background-image:  url("~/assets/bg5.jpg");
      }

      &3{
background-image:  url("~/assets/geo2.jpg");

      }

      &4{
background-image:  url("~/assets/site1.jpg");
        
      }

      &5{

background-image:  url("~/assets/oil2.jpg");

      }
    }
    &-text-container {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
       background: $color-white;
    }
    &-text {
      background-color: white;
      width: 80%;
      height: 80%;
      position: relative;
      top: -10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-heading {
        width: 100%;
        height: 30%;
        display: flex;
        padding-top: 10px;
        justify-content: center;
        text-align: center;
        
        
   
      }
      &-desc {
        width: 100%;
        height: 65%;
       
        padding-top: 20px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: justify;
        
      }
    }
    &-button {
      width: 100%;
      height: 20%;
      display: flex;
      padding-top: 10px;
      justify-content: center;
      align-items: flex-start;
      background-color: white;
    }
  }
  
  .myButton {
    -moz-box-shadow: 0px 10px 14px -7px #cfcfcf;
    -webkit-box-shadow: 0px 10px 14px -7px #cfcfcf;
    box-shadow: 0px 10px 14px -7px #cfcfcf;
    background-color: transparent;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    border: 1px solid $color-grey-dark-2;
    display: inline-block;
    cursor: pointer;
    color: $color-grey-dark-2;
    font-family: Arial;
    font-size: 15px;
    padding: 10px 24px;
    text-decoration: none;
  }
  
  .myButton:hover {
    background-color: transparent;
  }
  
  .myButton:active {
    position: relative;
    top: 1px;
  }
</style>