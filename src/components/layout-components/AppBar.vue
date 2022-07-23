<template>
  <div class="app-padding py-3 d-flex align-center" id="app-bar">

    <div class="d-inline-block w-25">
      <router-link to="/" class="router-link">
        <strong class="font-weight-bold" :class="$vuetify.display.mobile?'text-h6':'text-h4'">Spidertech</strong>
      </router-link>
    </div>
    <!--    <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/color-logo.svg')" alt="logo" class="app-logo"-->
    <!--    :width="$vuetify.display.mobile?80:''">-->

    <div class="d-inline-block text-right w-75">
      <div v-if="!$vuetify.display.mobile">
        <div v-for="(item,i) in link_list" :key="i"
             class="d-inline-block ml-8 text-primary align-center">
          <router-link class="router-link" :to="{ name: item.route_name}">
            <center>
              <span class="un"
                    :class="$route.name==item.route_name?'text-un':''"
              >  {{ item.title }}</span>
            </center>
          </router-link>
        </div>
      </div>
      <div v-else>
        <v-menu v-model="menu" transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-icon v-if="menu" size="x-large" v-bind="props">mdi-close</v-icon>
            <v-icon v-else size="x-large" v-bind="props">mdi-menu</v-icon>
          </template>
          <div class="text-center bg-surface" :style="menu_style">
            <div v-for="(item,i) in link_list" :key="i" class="text-secondary pb-3">
              <router-link class="router-link" :to="{ name: item.route_name}">
                <span class="un">  {{ item.title }}</span>
              </router-link>
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
    color: rgb(var(--v-theme-secondary), 1);
    text-decoration: none;
  }

  .un:after {
    content: '';
    width: 0px;
    height: 2px;
    margin-top: 3px;
    display: block;
    background: rgb(var(--v-theme-secondary), 1);
    transition-duration: 800ms;
  }

  .un:hover:after {
    width: 80%;
  }

  .text-un {
    color: rgb(var(--v-theme-secondary), 1) !important;
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
          route_name: 'about_us',
          link: "#"
        },
        {
          title: "Contact Us",
          route_name: 'contact_us',
          link: "#"
        },
        {
          title: "Blog",
          route_name: 'blogs',
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
    APP_BAR.style.height = this.$vuetify.display.mobile ? '60px' : '100px'
    document.addEventListener('scroll', function () {
      if (document.scrollingElement.scrollTop) {
        if (this.$vuetify.display.mobile)
          APP_BAR.style.height = document.scrollingElement.scrollTop < 50 ? "60px" : "50px"
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
