<template>
  <div class="app-padding my-5">
    <!--  author details  -->
    <div class="d-flex align-center">
      <div class="d-inline-block">
        <v-avatar size="50">
          <v-img
              :src="blog_data.author_img"
              alt="John"
          ></v-img>
        </v-avatar>
      </div>
      <div class="d-inline-block align-center ml-2">
        <p class="text-body-1 fw-450 text-secondary2"> {{ blog_data.author_name }}</p>
        <v-divider></v-divider>
        <p class="text-subtitle-2">{{ blog_data.date }}</p>
      </div>
    </div>
    <span class="float-right text-subtitle-2 "> {{ blog_data.read_time }}</span>
    <!--    -->
    <div v-for="(data,i) in blog_data.items" :key="i" class="my-7">
      <!-- heading -->
      <div v-if="data.type=='heading'">
        <h1 v-if="data.title"
            :class="$vuetify.display.mobile?data.m_class_name||'text-h5' :data.class_name||'text-h4'"
            class="font-weight-bold text-left text-secondary2" v-html="data.title">
        </h1>
      </div>
      <!-- paragraph -->
      <div v-if="data.type=='paragraph'">
        <div
            :class=" $vuetify.display.mobile?blog_data.m_class_name||'text-h6' :blog_data.class_name||'text-h5'"
            class="mb-3 font-weight-bold text-secondary2"
            v-html="data.paragraph_title">
        </div>
        <p class="paragraph-text" :class="data.class_name" v-html="data.text"></p>
      </div>
      <!-- img -->
      <div v-else-if="data.type=='img'">
        <figure>
          <v-img
              v-if="data.url"
              class="align-end blog-card-img"
              aspect-ratio="1"
              :max-height="$vuetify.display.mobile?data.m_height||200 :data.height||400"
              :src="data.url"
              cover
          ></v-img>
          <p v-html="data.caption" class=" text-caption"
             :class="data.class_name"></p>
        </figure>
      </div>
      <!-- code -->
      <div v-else-if="data.type=='code'">
      </div>
      <!-- html -->
      <div v-else-if="data.type=='html'">
        <div v-html="data.html">
        </div>
      </div>
    </div>

    <div class="text-right my-5">
      <v-btn color="secondary" variant="outlined" rounded> Read More</v-btn>
    </div>
    <v-divider></v-divider>
  </div>
</template>
<!--  -->
<style lang="scss" scoped>
.paragraph-text {
  font-size: 20px;
}
</style>
<!--   -->
<script>
import Data from "@/helper/blog_data"

export default {
  name: 'BlogFeed',
  components: {},
  data() {
    return {
      blog_data: [],
    }
  },
  mounted() {
    this.blog_data = Data.blog_list[this.$route.params.id || 0]
  },
  methods: {}
};
</script>
