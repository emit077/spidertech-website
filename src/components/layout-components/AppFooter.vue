<template>
  <v-footer app absolute class="text-white text-center footer-wrapper d-block bg-dark"
            v-if="footer"
            :class="$vuetify.display.mobile?'py-0  ':'py-10'">
    <v-row justify="center" class=" py-10" no-gutters>
      <v-col md="3" cols="12" class="text-center py-5">
        <div class="px-5">
          <router-link to="/" class="router-link">
            <strong class="font-weight-bold text-white"
                    :class="$vuetify.display.mobile?'text-h4':'text-h4'">Spidertech</strong>
          </router-link>
          <!--          <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/color-logo.svg')" alt="logo"-->
          <!--               class="app-logo">-->
          <v-divider class="my-4" color="rgb(var(--v-theme-secondary2), 0.3)"></v-divider>
          <div class="d-inline-flex mx-2" v-for="(item,i) in contact_list" :key="i">
            <a :href="item.link" target="_blank" class="">
              <v-icon class="social-icon" size="32">{{ item.icon }}</v-icon>
            </a>
          </div>
        </div>
      </v-col>
      <v-col md="2" cols="6" class="text-left py-5">
        <div class="px-3">
          <p class="text-secondary mb-3" :class="$vuetify.display.mobile?'text-subtitle-1 ':'text-h6'"> Our Services</p>
          <ol class="link-style">
            <li class="text-white pb-2">Web development</li>
            <li class="text-white pb-2">UI/UX designing</li>
            <li class="text-white pb-2">Graphics designing</li>
            <li class="text-white pb-2">Website designing</li>
          </ol>
        </div>
      </v-col>
      <v-col md="2" cols="6" class="text-left py-5">
        <div class="px-3">
          <p class=" text-secondary  mb-3" :class="$vuetify.display.mobile?'text-subtitle-1 ':'text-h6'"> Quick
            Links</p>
          <ol class="link-style">
            <!--            <li class="text-white pb-2" v-for="(item,i) in nav_link_list" :key="i">-->
            <li v-for="(item,i) in nav_link_list" :key="i" class="text-white">
          <span class="d-inline-block pb-2" v-if="item.link && $route.name==item.link_page">
            <a href="#" @click.prevent="onLinkClick(item.link)" class="router-link">
              <center>
                <span class="un"> {{ item.title }}</span>
              </center>
            </a>
          </span>
              <span class="d-inline-block pb-2" v-else-if="item.route_name">
            <router-link class="router-link " :to="{ name: item.route_name}">
              <center>
                <span class="un text-white"
                      :class="$route.name==item.route_name?'text-un':''"
                >  {{ item.title }}</span>
              </center>
            </router-link>
          </span>
            </li>
            <!--            </li>-->
          </ol>
        </div>
      </v-col>
      <v-col md="3" cols="12" class="text-left py-5">
        <div class="px-3">
          <p class="text-secondary  mb-3" :class="$vuetify.display.mobile?'text-subtitle-1 ':'text-h6'"> Quick
            Contact</p>
          <div class="text-white d-flex align-center mb-3">
            <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/call.svg')" alt=""
                 class="d-inline-flex mr-3">+91 1234567890
          </div>
          <div class="text-white">
            <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/mail.svg')" alt=""
                 class="d-inline-flex mr-3">hello.spidertech@gmail.com
          </div>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>
<style lang="scss">
.footer-wrapper {
  background-color: #1F2020;

  .app-logo {
    filter: grayscale(100%);
  }

  .social-icon {
    color: #ffffff;
    transition-duration: 1s;
  }

  .social-icon:hover {
    transform: scale(1.33);
  }

  a {
    text-decoration: none;
  }

  .l-border {
    height: 100% !important;
    border-left: solid 1px;
    border-color: rgb(var(--v-theme-secondary2), 0.7);
  }

  .link-style {
    list-style: none;
    color: white;
  }

  .rocket-illustration {
    position: absolute;
    bottom: 0px;
    right: -20px;
    width: 450px;

  }
}
</style>

<script>
export default {
  name: "AppFooter",
  data: () => ({
    footer: false,
    contact_list: [
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/Spidertechin-109532415172906",
      },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/amit-kumar-sahu-705a06137",
      },
      {
        icon: "mdi-stack-overflow",
        link: "https://stackoverflow.com/users/10175889/amit",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/emit077/",
      },
    ],
  }),
  mounted() {
    setTimeout(() => {
      this.footer = true
    }, 500)
  },
  methods: {},
};
</script>