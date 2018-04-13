<template>
    <section class="services-main">
        <h2 class="services-title">What we offer</h2>
        <main class="card-services">
            <div class="card">
                <h2 class="card-title">Title </h2>
                <p class="card-decription">This is the description</p>
    
    
    
            </div>
            <div class="card">
                <h2 class="card-title">Title </h2>
                <p class="card-decription">This is the description</p>
    
    
            </div>
            <div class="card">
    
                <h2 class="card-title">Title </h2>
                <p class="card-decription">This is the description</p>
    
            </div>
    
            <div class="card">
    
                <h2 class="card-title">Title </h2>
                <p class="card-decription">This is the description</p>
    
            </div>
            <div class="card">
                <h2 class="card-title">Title </h2>
                <p class="card-decription">This is the description</p>
    
    
            </div>
            <div class="card">
                <h2 class="card-title">Title </h2>
                <p class="card-decription">This is the description</p>
    
    
            </div>
            <!-- <div class = "card"> <img src="~/assets/bg2.jpg" alt="Sample photo"></div>
              <div class = "card"><img src="~/assets/bg2.jpg" alt="Sample photo"></div>
              <div class = "card"><img src="~/assets/bg2.jpg" alt="Sample photo"></div>
              <div class = "card"><img src="~/assets/bg2.jpg" alt="Sample photo"></div>
             <div class = "card"> <img src="~/assets/bg2.jpg" alt="Sample photo"></div> -->
    
        </main>
    </section>
</template>



<style scoped>
    .services-title {
        margin-top: 110px;
        text-align: center;
        font-size: 42px;
    }
    
    .card-services {
        display: flex;
        flex-wrap: wrap;
       
        flex-direction: row;
        max-height: 100vh;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    }
    
    .card {
        margin: 1px;
        background: 
    linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("~/assets/bg1.jpg");
        
        background-size: cover;
        /* border: 3px solid #000; */
        /* box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3);  */
        width: 460px;
        height: 400px;
        display: flex;
        flex-direction: column;
    justify-content: center;
        align-items: center;
        
    }

    .card-title{
        margin-top: 30px;
        flex: 1;
        color: white;
display: flex;
  justify-content: center;
        align-items: center;

   }


    .card-decription{
        display: flex;
  justify-content: center;
        align-items: center;

flex: 1;
color: white;
    }
</style>




