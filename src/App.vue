<template>
  <v-app theme="theme1">
    <app-bar/>
    <v-main>
      <router-view/>
    </v-main>
    <app-footer/>
  </v-app>
</template>
<style lang="scss">
@import "assets/css/style.scss";
@import "assets/css/animation.scss";

.app-padding {
  padding-left: 14%;
  padding-right: 14%;
}

</style>

<script>
import AppBar from "@/components/layout-components/AppBar"
import AppFooter from "@/components/layout-components/AppFooter"

export default {
  name: 'App',
  components: {
    AppBar,
    AppFooter
  },
  data: () => ({
    //
  }),
  mounted() {
    const DIV = document.getElementById("app")
    document.addEventListener('scroll', function () {
      DIV.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      )
    });
  },
}
</script>
