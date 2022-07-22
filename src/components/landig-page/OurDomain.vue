<template>
  <div class="py-15 app-padding our-domain-section">
    <v-row align="center" justify="center" class="mb-10" no-gutters>
      <v-col sm="12" cols="13" class="justify-center text-center">
        <p class="font-weight-bold text-primary px-10" :class="$vuetify.display.mobile?'text-h5 ':'text-h4'">
          Have a idea in mind? We can help you build it !
        </p>
        <p class="mt-4 text-black" :class="$vuetify.display.mobile?'text-subtitle-1 ':' text-h6'">
          We design products that cater to your brand and scale your business
          through increased productivity and optimal performance.We can help
          you, no matter what is your domain or how big or small your business is!
        </p>
      </v-col>
    </v-row>
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
    return {}
  },
  mounted() {
  },
  methods: {}
};
</script>
