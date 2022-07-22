<template>
  <div class="py-15 app-padding background-top-cover" :style="{ backgroundImage : 'url(' + background_image + ')' }">
    <div v-for="(service,i) in service_list" :key="i" class="my-15 py-3">
      <v-row align="center" justify="center" class="my-10 hwd-card-1" no-gutters v-if="i%2==0">
        <v-col sm="6" cols="13" :class="$vuetify.display.mobile?'text-center ':' text-left'">
          <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/'+service.img_name)" alt="img"
               class="mw-100">
        </v-col>
        <v-col sm="6" cols="12" class="justify-center py-10"
               :class="$vuetify.display.mobile?' text-center ':'  text-right'">
          <!--        <div class="border-sub-text mb-3"> Customer Service</div>-->
          <p class="font-weight-bold text-primary" :class="$vuetify.display.mobile?'text-h5 ':' text-h3'">
            {{ service.title }}
          </p>
          <p class=" mt-3 text-secondary" :class="$vuetify.display.mobile?'text-subtitle-1 ':' text-h6'">
            {{ service.description }}
          </p>
        </v-col>
      </v-row>
      <!--    -->
      <v-row align="center" justify="center" class="mb-10" no-gutters v-else>
        <v-col sm="6" cols="13" class="text-center" v-if="$vuetify.display.mobile">
          <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/'+service.img_name)" alt="img"
               class="mw-100">
        </v-col>
        <v-col sm="6" cols="12" class="justify-center py-10"
               :class="$vuetify.display.mobile?' text-center ':'  text-left'">
          <!--        <div class="border-sub-text mb-3"> Customer Service</div>-->
          <p class=" font-weight-bold text-primary" :class="$vuetify.display.mobile?'text-h5 ':' text-h3'">
            {{ service.title }}
          </p>
          <p class=" mt-3 text-secondary" :class="$vuetify.display.mobile?'text-subtitle-1 ':' text-h6'">
            {{ service.description }}
          </p>
        </v-col>
        <v-col sm="6" cols="13" class="text-right" v-if="!$vuetify.display.mobile">
          <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/'+service.img_name)" alt="img"
               class="mw-100">
        </v-col>
      </v-row>
      <!--      -->
    </div>
  </div>
  <!--    -->
  <img v-if="!$vuetify.display.mobile" :src="require('@/assets/'+this.$vuetify.theme.global.name+'/solar-system.png')"
       alt="img" class="solar-img">
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
  width: 500px;
  left: -260px;
  top: 1500px;
  z-index: 1;
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
      service_list: [
        {
          title: "Website design & development",
          description: "We build beautiful websites that your users will love. A responsive design makes your website accessible to all users, regardless of their device",
          img_name: "illustration-1.png"
        },
        {
          title: "UI/UX research and development",
          description: "Our design team do a customer analysis & work on Pen & Paper sketches Wireframing, User Interface designing & Prototyping. ",
          img_name: "illustration-2.png"
        },
        {
          title: "Product development",
          description: "We analyse your requirement and your target audience & build a great product for you which helps you to grow your business",
          img_name: "illustration-3.png"
        },
        {
          title: "Graphic designing",
          description: "",
          img_name: "illustration-3.png"
        }
      ]
    }
  },
  mounted() {
    // this.background_image = require("@/assets/" + this.$vuetify.theme.global.name + "/wave-3.svg")
  },
  methods: {
    getImgPath(img_name) {
      let path = '@/assets/' + this.$vuetify.theme.global.name + '/' + img_name
      console.log(path)
      return require(path)
    }
  }
};
</script>
