<template >

<div class="container" >
  <div class="chevron" ></div>
  <div class="chevron" ></div>
  <div class="chevron" ></div>
  
</div>
    
</template>


<style scoped>

.container {

    padding-bottom: 90px;
    height:200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}



.chevron {
  position: absolute;
  width: 1.3rem;
  height: 0.2rem;
  opacity: 0;
  -webkit-transform: scale(0.3);
          transform: scale(0.3);
  -webkit-animation: move-chevron 3s ease-out infinite;
          animation: move-chevron 3s ease-out infinite;
}

.chevron:first-child {
  -webkit-animation: move-chevron 3s ease-out 1s infinite;
          animation: move-chevron 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  -webkit-animation: move-chevron 3s ease-out 2s infinite;
          animation: move-chevron 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  
}

.chevron:before,
.chevron:after{

background: black;

}

.chevron:before {
  left: 0;
  -webkit-transform: skewY(30deg);
          transform: skewY(30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  -webkit-transform: skewY(-30deg);
          transform: skewY(-30deg);
}

@-webkit-keyframes move-chevron {
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    -webkit-transform: translateY(2.28rem);
            transform: translateY(2.28rem);
  }
  66.6% {
    opacity: 1;
    -webkit-transform: translateY(3.12rem);
            transform: translateY(3.12rem);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(4.8rem) scale(0.5);
            transform: translateY(4.8rem) scale(0.5);
  }
}

@keyframes move-chevron {
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    -webkit-transform: translateY(2.28rem);
            transform: translateY(2.28rem);
  }
  66.6% {
    opacity: 1;
    -webkit-transform: translateY(3.12rem);
            transform: translateY(3.12rem);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(4.8rem) scale(0.5);
            transform: translateY(4.8rem) scale(0.5);
  }
}

    
</style>