<template>
  <div class="mt-10 spider-web-bg">
    <h2 class="text-center"> Welcome to SpiderTech</h2>
    <v-row>
      <v-col cols="12" md="12">
        <div class="float-right">
          <Vue3Lottie :animationData="JunctionLoader" :height="400" :width="400"/>
        </div>
      </v-col>
      <v-col cols="12" md="12">
        <div class="spider-move">
          <Vue3Lottie :animationData="WalkingSpider" :height="250" :width="250" class="spider"/>
        </div>
        <v-divider/>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.spider-web-bg {
  position: absolute;
  width: 100%;
  top: -70px;
  right: -130px;
  background-image: url("../assets/Asset 1.svg");
  opacity: 0.6;
  background-size: contain;
  background-position: right;
  /*background-origin: top center;*/
}

.spider {
  position: absolute;
  left: 0px;
  bottom: -65px;
}

.spider-move {
  transform: translateX(-10%);
  animation: move 18s linear infinite;
}

.spider-move:hover {
  animation: paused;
}

/* Create the animation */
@keyframes move {
  to {
    transform: translateX(100%);
  }
}

</style>
<script>
import {defineComponent} from 'vue';
import WalkingSpider from '@/assets/lottiefiles/walking-spider.json'
import JunctionLoader from '@/assets/lottiefiles/junction-loader.json'

// Components

export default defineComponent({
  name: 'HomeView',

  components: {},
  data() {
    return {
      WalkingSpider,
      JunctionLoader,
    }
  }
  ,
})
;
</script>
