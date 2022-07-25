<template>
  <div class="py-15 app-padding our-domain-section">
    <v-row align="center" justify="center" class="mb-8 my-5" no-gutters>
      <v-col sm="12" cols="13" class="justify-center text-center">
        <p class="font-weight-bold text-primary px-10" :class="$vuetify.display.mobile?'text-h5 ':'text-h4'">
          Have a idea in mind? We can help you build it !
        </p>
        <p class="mt-5 text-black" :class="$vuetify.display.mobile?'text-subtitle-1 ':' text-subtitle-1'">
          We design products that cater to your brand and scale your business
          through increased productivity and optimal performance.We can help
          you, no matter what is your domain or how big or small your business is!
        </p>
      </v-col>
    </v-row>
    <div class="text-center">
      <div :class="this.$vuetify.display.mobile?'mx-3':'mx-10'" class="d-inline-block pa-5 "
           v-for="(item, i) in domain_list"
           :key="i">
        <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/'+item.img_name)" alt="img"
             width="70"
             height="70">
        <p class="text-secondary2 text-subtitle-1 fw-450 mt-2">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.our-domain-section {
  background-color: rgb(var(--v-theme-secondary), 0.1);
}
</style>

<script>
export default {
  name: 'OverDomain',
  components: {},
  data() {
    return {
      domain_list: [
        {
          img_name: "account.svg",
          name: "Account",
        },
        {
          img_name: "Education.svg",
          name: "Education"
        },
        {
          img_name: "hospitality.svg",
          name: "Hospitality"
        },
        {
          img_name: "e-commerce.svg",
          name: "e-commerce"
        }
      ]
    }
  },
  mounted() {
  },
  methods: {}
};
</script>
