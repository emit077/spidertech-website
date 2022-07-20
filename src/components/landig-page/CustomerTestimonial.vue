<template>
  <div class="app-padding testimonial-bg pb-10">
    <v-carousel
        cycle
        hide-delimiters
        show-arrows="hover"
        color="transparent"
        height="auto"
        class="py-10"
    >
      <v-carousel-item
          v-for="(item, i) in testimonial_list"
          :key="i"
          class="bg-transparent"
      >
        <v-row align="center" justify="center" class="testimonial-card-wrapper py-10 px-10">
          <v-col sm="3" cols="12" class="text-left">
            <v-img :src="item.img" aspect-ratio="1" class="img-circle" height="170" width="170"></v-img>
          </v-col>
          <v-col sm="9" cols="12" class="text-left">
            <v-icon size="100" class="mt-n15" color="rgb(var(--v-theme-primary), 0.1)"> mdi-format-quote-open</v-icon>
            <div class="text-subtitle-1">
              {{ item.msg }}
              <p class="text-primary text-subtitle-1 mt-3 font-weight-bold"> {{ item.name }}</p>
              <small> {{ item.designation }}</small>
            </div>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<style lang="scss" scoped>
.testimonial-bg {
  background-color: rgb(var(--v-theme-secondary), 0.1)
}

.testimonial-card-wrapper {
  .img-circle {
    border-radius: 50%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      testimonial_list: [
        {
          img: "https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/Team-Image.jpg",
          msg: "You can help customers in real-time across all of your channels from email, social, website, iOS, and Android apps.",
          name: "Dr Om vijay Sahu",
          designation: "Founder of Digital ayurveda",
        }
      ]
    }
  },
}
</script>