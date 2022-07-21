<template>
  <div class="app-padding d-flex align-center" id="landing-screen"
       :style="style" :class="$vuetify.display.mobile?'mt-5 pt-15 ':'text-h6'">
    <v-row align="center" justify="center" no-gutters>
      <v-col sm="6" cols="12" class="justify-center" :class="$vuetify.display.mobile?'text-center ':' text-left'">
        <h1 class="font-weight-bold text-primary" :class="$vuetify.display.mobile?'text-h4 ':'text-h2'">We build
          digital
          products for your success
        </h1>
        <p class=" mt-2 text-secondary" :class="$vuetify.display.mobile?'text-subtitle-1 ':'text-h6'">
          Scale your business with <br>
          our great products
        </p>
      </v-col>
      <v-col sm="6" cols="12" class="text-right">
        <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/home-iluustration.svg')" alt="img" class="w-100">
      </v-col>
    </v-row>
  </div>
</template>
<!--  -->
<style lang="scss" scoped>
#landing-screen {
  background-position: bottom;
  background-size: contain;
}
</style>
<!--   -->
<script>
export default {
  name: 'LandingPageVue',
  components: {},
  data() {
    return {
      height: screen.height - 150,
      style: {
        height: screen.height - 150 + "px",
        backgroundImage: 'url(' + require("@/assets/theme1/wave-1.svg") + ')'
      }
    }
  },
  mounted() {
    this.style = {
      height: screen.height - 150 + "px",
      backgroundImage: 'url(' + require("@/assets/" + this.$vuetify.theme.global.name + "/wave-1.svg") + ')'
    }
  },
  methods: {}
};
</script>
