<template>
  <div class="app-padding py-10">
    <v-row align="center" justify="center" class="blog-card-wrapper mb-8 elevation-1"
           no-gutters v-bind="props">
      <v-col sm="6" cols="12" class="text-right overflow-hidden">
        <v-img
            class="align-end text-left blog-card-img"
            aspect-ratio="1"
            :src="recentBlog.img_url"
            max-height="400"
            cover
        ></v-img>
      </v-col>
      <v-col sm="6" cols="12" class="justify-center" :class="$vuetify.display.mobile?'text-center ':' text-left'">
        <div class="pa-4">
          <p class="font-weight-bold text-primary" :class="$vuetify.display.mobile?'text-h4 ':'text-h2'"
             v-html="recentBlog.title"></p>
          <div class="mt-8 py-1 text-right my-1">
            <v-btn flat variant="outlined" color="primary">Read more</v-btn>
            <v-avatar class="float-left " size="default">
              <v-img alt="Avatar" :src="recentBlog.author_img">
              </v-img>
            </v-avatar>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col sm="4" cols="12" class="text-right" v-for="(blog,i) in blog_list" :key="i">
        <div class="blog-card-wrapper">
          <v-img
              class="align-end text-left blog-card-img "
              aspect-ratio="1"
              :src="blog  .img_url"
              cover
          >
            <div class="post-preview-content h-100 py-1">
              <div class="px-3 pb-1">
                <v-card-title class="text-h6 text-white" v-html="blog.title"></v-card-title>
              </div>
              <v-divider color="rgb(var(--v-theme-surface),0.4)" class=""></v-divider>
              <div class="px-4 py-1 text-right">
                <span class="text-white">Read more</span>
                <v-avatar class="float-left" size="30">
                  <v-img alt="Avatar" :src="blog.author_img">
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
  overflow: hidden;

  .blog-card-img {
    transition-duration: 2s;
    transform-origin: bottom;

    .post-preview-content {
      transition-duration: 2s;
      transform-origin: bottom;
      background: rgb(181, 249, 242);
      background: linear-gradient(180deg, rgba(181, 249, 242, 0.09145665101978295) 0%, rgba(3, 13, 11, 0.5732493681066176) 40%);
    }
  }
}

.blog-card-wrapper:hover {
  box-shadow: 0px 8px 9px -5px rgba(var($shadowColor), 0.2), 0px 15px 22px 2px rgba(var($shadowColor), 0.14), 0px 6px 28px 5px rgba(var($shadowColor), 0.12) !important;

  .blog-card-img {
    transform: scale(1.2);

    .post-preview-content {
      transform: scale(0.82);
    }
  }
}

</style>

<script>
import Data from "@/helper/blog_data"

export default {
  name: 'BlogHome',
  components: {},
  data() {
    return {
      blog_list: Data.blog_list,
      recentBlog: Data.blog_list[0],
    }
  }, beforeMount() {
    this.toggleLoading()
  },
  mounted() {
  },
  methods: {}
};
</script>


