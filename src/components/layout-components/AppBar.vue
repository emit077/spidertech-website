<template>
  <v-app-bar color="red" flat class=" app-padding"
             elevate-on-scroll
             shrink-on-scroll
             height="100">
    <!--                 :density="$vuetify.display.mobile?'dense':'prominent'"-->

    <v-app-bar-title>
      <strong>SPIDERTECH</strong>
      <!--      <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/color-logo.svg')" alt="logo" class="app-logo">-->
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <div v-if="!$vuetify.display.mobile">
      <div v-for="(item,i) in link_list" :key="i"
           class="d-inline-flex mx-5 justify-center align-center h-100">
        {{ item.title }}
      </div>
    </div>
  </v-app-bar>
</template>
<!--  style  -->
<style lang="scss">

</style>
<!--   script   -->
<script>
export default {
  name: 'LandingPageVue',
  components: {},
  data() {
    return {
      link_list: [
        {
          title: "About Us",
          link: "#"
        },
        {
          title: "Contact Us",
          link: "#"
        },
        {
          title: "About Us",
          link: "#"
        }
      ]
    }
  },
  mounted() {
  },
  methods: {}
};
</script>
