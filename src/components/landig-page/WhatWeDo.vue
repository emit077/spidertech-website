<template>
  <div class="py-15 app-padding background-top-cover"  :style="{ backgroundImage : 'url(' + background_image + ')' }">
    <v-row align="center" justify="center" class="mb-10 hwd-card-1">
      <v-col sm="6" cols="13" class="text-left">
        <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/illustration-1.png')" alt="img">
      </v-col>
      <v-col sm="6" cols="13" class="justify-center text-right">
        <div class="border-sub-text mb-3"> Customer Service</div>
        <p class="text-h3 font-weight-bold text-primary">
          Product workflow
          development
        </p>
        <p class="text-h6 mt-3 text-secondary">
          In this service we understand the Problem Statement
          Do Market Research, Define Customer Persona & Innovate
          a solution for your Minimum Viable Product.
        </p>
      </v-col>
    </v-row>
    <!--    -->
    <v-row align="center" justify="center" class="mb-10">
      <v-col sm="6" cols="13" class="justify-center">
        <div class="border-sub-text mb-3"> Customer Service</div>
        <p class="text-h3 font-weight-bold text-primary">
          UI/UX research
          and development
        </p>
        <p class="text-h6 mt-3 text-secondary">
          In this service, Our design team do a customer
          analysis & work on Pen & Paper sketches
          Wireframing, User Interface designing &
          Prototyping.
        </p>
      </v-col>
      <v-col sm="6" cols="13" class="text-right">
        <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/illustration-2.png')" alt="img">
      </v-col>
    </v-row>
    <!--      -->
    <v-row align="center" justify="center" class="mb-10">
      <v-col sm="6" cols="13" class="text-left">
        <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/illustration-3.png')" alt="img">
      </v-col>
      <v-col sm="6" cols="13" class="justify-center text-right">
        <div class="border-sub-text mb-3"> Customer Service</div>
        <p class="text-h3 font-weight-bold text-primary">
          Product development
          services
        </p>
        <p class="text-h6 mt-3 text-secondary">
          This is where the real journey begins! In this service
          our expert engineering team starts the
          software development by following the agile approach.
          We work on 2-3 weeks
          sprints
        </p>
      </v-col>

    </v-row>
  </div>
  <!--    -->
  <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/solar-system.png')" alt="img" class="solar-img">
  <!--      -->
</template>
<style lang="scss" scoped>
.border-sub-text {
  border: solid 2px;
  border-radius: 8px;
  padding: 1px 10px;
  font-weight: bold;
  display: inline-block;
  color: rgb(var(--v-theme-secondary2));
  border-color: rgb(var(--v-theme-secondary2)) !important;
}

.solar-img {
  position: absolute;
  width: 400px;
  left: -210px;
  top: 1200px;
  animation: spin360 80s linear infinite;
}


</style>

<script>
export default {
  name: 'WhatWeDo',
  components: {},
  data() {
    return {
      background_image: "",
    }
  },
  mounted() {
    // this.background_image = require("@/assets/" + this.$vuetify.theme.global.name + "/wave-3.svg")
  },
  methods: {}
};
</script>
