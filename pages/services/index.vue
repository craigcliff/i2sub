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
  
                <div class="services-card-line"> </div>
  
                <p class="services-card-text-desc">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                  content here', making it look like readable English. </p>
  
  
  
              </div>
  
  
  
            </div>
  
            <div class="services-card-button">
  
  
              <a href="#" class="myButton" v-scroll-to="'.container-drilling'">Find out More</a>
  
  
  
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
  
                <div class="services-card-line"> </div>
  
  
                <p class="services-card-text-desc">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                  content here', making it look like readable English. </p>
  
  
  
              </div>
  
  
  
            </div>
  
            <div class="services-card-button">
  
  
              <a href="#" class="myButton" v-scroll-to="'.container-water'">Find out More</a>
  
  
  
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
                <div class="services-card-line"> </div>
                <p class="services-card-text-desc">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                  content here', making it look like readable English. </p>
  
  
  
              </div>
  
  
  
            </div>
  
            <div class="services-card-button">
  
  
              <a href="#" class="myButton" v-scroll-to="'.container-geotechnical'">Find out More</a>
  
  
  
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
                <div class="services-card-line"> </div>
                <p class="services-card-text-desc">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                  content here', making it look like readable English. </p>
  
  
  
              </div>
  
  
  
            </div>
  
            <div class="services-card-button">
  
  
              <a href="#" class="myButton" v-scroll-to="'.container-subsurface'">Find out More</a>
  
  
  
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
                <div class="services-card-line"> </div>
                <p class="services-card-text-desc">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                  content here', making it look like readable English. </p>
  
  
  
              </div>
  
  
  
            </div>
  
            <div class="services-card-button">
  
  
              <a href="#" class="myButton" v-scroll-to="'.container-oilandgas'">Find out More</a>
  
  
  
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
  import {
    TweenMax
  } from "gsap";
  
  
  import TimelineMax from "gsap/TimelineMax";
  export default {
    layout: "layout3",
  
    components: {
      drilling,
      water,
      geotechnical,
      subsurface,
      oilandgas
    },
  
    data() {
      return {
  
        tl: new TimelineMax({
          paused: false
          // repeat:-1
        })
      };
    },
  
    mounted() {
      this.$store.commit("navStateTrue");
      this.staggerServices();
  
    },
  
    methods: {
      staggerServices: function() {
  
        this.tl.staggerFrom(".services-card", 1, {
          y: 40,
          opacity: 0
  
        }, 0.4);
  
  
      }
  
  
  
  
    }
  
  
  
  
  
  };
</script>


<style scoped lang="scss">
  .container-services {}
  
  .services-main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 50px;
    background-color: #dde6ef;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.17'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  
  .services-heading {
    // color: white;
    // background-color:rgba(0, 0, 0, 0.3);
    height: 20%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 15px 25px;
    
    margin-bottom: 20px;
    font-family: Miller-text, helvetica;
    font-weight: 400;
    font-size: 42px;
    line-height: 60px;
    @include respond(big-desktop) {
      margin-top: 0px;
    }
  }
  
  .services-card-line {
    width: 80px;
    border-bottom: $color-secondary-light solid 1px;
  }
  
  .card-main {
   
    height: 80%;
    width: 100%;
    display: flex;
    &-services {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
  }
  
  .services-card-1,
  .services-card-2,
  .services-card-3,
  .services-card-4,
  .services-card-5 {
    box-shadow: .8px .9px 10px grey;
    transition: box-shadow .5s ease-out;
    &:hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
      transition: box-shadow .5s ease-in;
    }
  }
  
  .services-card {
    max-width: 230px;
    height: 420px;
    position: relative;
    @include respond(big-desktop) {
      max-width: 330px;
      height: 550px;
    }
    // border: 1px solid $color-secondary-dark;
    display: flex;
    flex-direction: column;
    &-image {
      width: 100%;
      height: 40%;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      &1 {
        background-image: url("~/assets/drilling1.jpg");
      }
      &2 {
        background-image: url("~/assets/bg5.jpg");
      }
      &3 {
        background-image: url("~/assets/geo2.jpg");
      }
      &4 {
        background-image: url("~/assets/site1.jpg");
      }
      &5 {
        background-image: url("~/assets/oil2.jpg");
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
        padding-top: 15px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: justify;
        font-family: Miller-text, helvetica;
        font-weight: 400;
        color: $color-black;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: .02em;
        @include respond(big-desktop) {
          font-size: 14px;
          line-height: 22px;
          letter-spacing: .02em;
        }
      }
      &-heading {
        font-family: Galano-bold, helvetica;
        font-weight: 400;
        letter-spacing: 0.1px;
        color: $color-black;
      }
    }
    &-button {
      width: 100%;
      height: 20%;
      display: flex;
      padding-top: 20px;
      justify-content: center;
      align-items: flex-start;
      background-color: white;
      @include respond(big-desktop) {
        padding-top: 30px;
      }
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