<template>
  <div class="app-padding py-3 d-flex align-center" id="app-bar">
    <div class="d-inline-block w-25"><strong class="font-weight-bold"
                                             :class="$vuetify.display.mobile?'text-h6':'text-h4'">Spidertech</strong>
    </div>
    <!--    <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/color-logo.svg')" alt="logo" class="app-logo"-->
    <!--    :width="$vuetify.display.mobile?80:''">-->

    <div class="d-inline-block text-right w-75">
      <div v-if="!$vuetify.display.mobile">
        <div v-for="(item,i) in link_list" :key="i"
             class="d-inline-block ml-8 text-secondary align-center">
          <center>
            <span class="un">  {{ item.title }}</span>
          </center>
        </div>
      </div>
      <div v-else>
        <v-menu v-model="menu" transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-btn v-if="menu" icon="mdi-close" text flat v-bind="props"></v-btn>
            <v-btn v-else icon="mdi-menu" text flat v-bind="props"></v-btn>
          </template>
          <div class="text-center bg-surface" :style="menu_style">
            <div v-for="(item,i) in link_list" :key="i" class="text-secondary pb-3">
              <span class="un">  {{ item.title }}</span>
            </div>
          </div>
        </v-menu>
      </div>
    </div>
  </div>
</template>
<!--  style  -->
<style lang="scss">
#app-bar {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  //height: 100px;
  vertical-align: middle;
  backdrop-filter: blur(10px);
  transition-duration: 500ms;
  transform-origin: bottom;

  .un {
    font-weight: 450;
  }

  .un:after {
    content: '';
    width: 0px;
    height: 2px;
    margin-top: 5px;
    display: block;
    background: rgb(var(--v-theme-secondary), 1);
    transition-duration: 800ms;
  }

  .un:hover:after {
    width: 80%;
  }

  .text-un::after {
    width: 80% !important;
  }
}

</style>
<!--   script   -->
<script>
export default {
  name: 'LandingPageVue',
  components: {},
  data() {
    return {
      bar_height: 0,
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
      ],
      menu_style: {},
      menu: false,
    }
  },
  mounted() {
    this.menu_style = {width: screen.width - 20 + "px !important"}
    const APP_BAR = document.getElementById("app-bar")
    document.addEventListener('scroll', function () {
      if (document.scrollingElement.scrollTop) {
        if (this.$vuetify.display.mobile)
          APP_BAR.style.height = document.scrollingElement.scrollTop < 50 ? "60px" : "40px"
        else
          APP_BAR.style.height = document.scrollingElement.scrollTop < 50 ? "100px" : "80px"
        // APP_BAR.style.backgroundColor = document.scrollingElement.scrollTop < screen.height ? "transparent" : "rgb(var(--v-theme-primary), 0.1)"
        APP_BAR.style.backgroundColor = document.scrollingElement.scrollTop < screen.height ? "transparent" : "rgb(var(--v-theme-surface), 0.8)"
      }

    }.bind(this));
  },
  methods: {
    onMenuUpdate() {
      console.log("asd")
    }
  }
};
</script>
