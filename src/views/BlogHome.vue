<template>
  <div class="app-padding py-10">
    <v-hover
        v-slot="{ isHovering, props }"
    >
      <v-row align="center" justify="center" class="blog-card-wrapper mb-8"
             :class="isHovering?'elevation-15':''"
             no-gutters v-bind="props">
        <v-col sm="6" cols="12" class="text-right overflow-hidden">
          <v-img
              class="align-end text-left blog-card-img"
              aspect-ratio="1"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
          ></v-img>
        </v-col>
        <v-col sm="6" cols="12" class="justify-center" :class="$vuetify.display.mobile?'text-center ':' text-left'">
          <div class="pa-4">
            <p class="font-weight-bold text-primary" :class="$vuetify.display.mobile?'text-h4 ':'text-h2'">
              We build digital products for your success
            </p>
            <div class="mt-8 py-1 text-right my-1">
              <v-btn flat variant="outlined" color="primary">Read more</v-btn>
              <v-avatar class="float-left " size="default">
                <v-img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                </v-img>
              </v-avatar>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-hover>


    <v-row align="center" justify="center">
      <v-col sm="4" cols="12" class="text-right" v-for="i in 9" :key="i">
        <div class="blog-card-wrapper">
          <v-img
              class="align-end text-left blog-card-img "
              aspect-ratio="1"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
          >
            <div class="post-preview-content">
              <div class="px-3">
                <v-card-title class="text-h6 text-white">Top 10 Australian beaches Top 10 Australian beaches Top 10
                  Australian beaches
                </v-card-title>
              </div>
              <v-divider color="rgb(var(--v-theme-surface),0.3)" class=""></v-divider>
              <div class="px-4 py-1 text-right">
                <span class="text-white">Read more</span>
                <v-avatar class="float-left my-1" size="x-small">
                  <v-img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                  </v-img>
                </v-avatar>
              </div>
            </div>
          </v-img>

        </div>

      </v-col>
    </v-row>
  </div>

</template>
<style lang="scss" scoped>
$shadowColor: --v-theme-primary;
.blog-card-wrapper {
  border-radius: 10px;
  //border: solid 1px;
  //border-color: rgb(0, 0, 0, 0.1);
  overflow: hidden;

  .blog-card-img {
    transition-duration: 2s;
    transform-origin: bottom;

    .post-preview-content {
      transition-duration: 2s;
      transform-origin: bottom;
    }
  }


}

.blog-card-wrapper:hover {
  box-shadow: 0px 8px 9px -5px rgba(var($shadowColor), 0.2), 0px 15px 22px 2px rgba(var($shadowColor), 0.14), 0px 6px 28px 5px rgba(var($shadowColor), 0.12) !important;

  .blog-card-img {
    transform: scale(1.1);

    .post-preview-content {
      transform: scale(0.91);
    }
  }
}

</style>

<script>

export default {
  name: 'BlogHome',
  components: {},
  data() {
    return {
      shadow_card_style: {}
    }
  }, beforeMount() {
    this.toggleLoading()
  },
  methods: {}
};
</script>
