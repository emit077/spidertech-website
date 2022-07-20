<template>
  <div class="app-padding d-flex align-center" id="landing-screen"
       :style="style">
    <v-row align="center" justify="center">
      <v-col sm="6" cols="12" class="justify-center">
        <h1 class="text-h2 font-weight-bold text-primary">We build <br> digital products <br> for your success
        </h1>
        <p class="text-h6 mt-2 text-secondary">
          Scale your business with <br>
          our great products
        </p>
      </v-col>
      <v-col sm="6" cols="12" class="text-right">
        <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/home-iluustration.svg')" alt="img">
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
