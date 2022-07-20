<template>
  <v-app-bar color="#fff" flat class="app-bar app-padding pt-10" :absolute="true" density="prominent" height="40">
    <v-app-bar-title>
      <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/color-logo.svg')" alt="logo" class="app-logo">
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <div v-for="(item,i) in link_list" :key="i" class="d-inline-flex mx-5 justify-center align-center h-100">
      {{ item.title }}
    </div>
  </v-app-bar>
</template>
<!--  style  -->
<style lang="scss">
.app-logo {
}
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
