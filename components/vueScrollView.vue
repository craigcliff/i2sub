<template>
  <section class="animation">



      <scroll-view :offset="400">
        <template slot-scope="visibility">

           <drilling :visible="visibility.drilling" key="drilling"
                :title="'Water sdfdsfdsafdsfdsafsadfds'"
                :pageImage="'/images/drilling1.jpg'"
                :desc="`sdfffffffffffffffffffffffff
                dafsssssssssssssssssssssssssssssssss
                asdfffffffffffffffffffffffffffff
                adffffffffffffffffffffffffff<br>
                asdfffffffffffffffffffff
                adsffffffffffffffffffffffff
                asdfffffffffffffffffffffffffff
                
                
                
                `
                
           
           
                
                
                
                
                
                
                "
           
           
           
           
           ></drilling>
<!-- <Split-section :visible="visibility.split" key="split"></Split-section> -->
      

        </template>
      </scroll-view>

</section>
</template>



<style scoped>

</style>

<script>

import ScrollView from 'vue-scrollview'
import drilling from "@/pages/services/drilling.vue";
import SplitSection from "@/components/Split-section.vue";
import RowSection from "@/components/RowSection.vue";


export default {
  components: {

      drilling,
      SplitSection,
    RowSection
  },

  data() {
    return {
    //   title: 'Water sdfdsf',
    //   pageImage: "/images/drilling1.jpg"
    }
  }
}
</script>

