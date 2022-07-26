<template>
  <div class="app-padding pb-10" :class="'testimonial-bg-'+$vuetify.theme.global.name">
    <v-row align="center" justify="center" no-gutters>
      <v-col sm="11" cols="12">
        <v-carousel
            hide-delimiters
            v-model="carousel"
            cycle
            :show-arrows="false"
            color="transparent"
            class="py-10"
            interval="3000"
        >
          <v-carousel-item
              v-for="(item, i) in testimonial_list"
              :key="i"
              class="bg-transparent"
          >
            <v-row align="center" justify="center" class="testimonial-card-wrapper h-100"
                   :class="$vuetify.display.mobile?'px-1':'px-10'" no-gutters>
              <v-col sm="3" cols="12" :class="$vuetify.display.mobile?'text-center ':'text-left'">
                <img :src="item.img" aspect-ratio="1"
                     :class="$vuetify.display.mobile?'img-circle mb-n10':'img-circle'"
                     :height="$vuetify.display.mobile?100:150"
                     :width="$vuetify.display.mobile?100:150">
              </v-col>
              <v-col sm="9" cols="12" class="text-left" :class="$vuetify.display.mobile?'mt-n15':''">
                <v-icon size="100"
                        :class="$vuetify.display.mobile?'mt-n15 mb-n10':'mt-n15 mb-n7'"
                        color="rgb(var(--v-theme-theme-stroke-2), 0.3)">
                  mdi-format-quote-open
                </v-icon>
                <div class="text-theme-stroke-1 opacity-8 fs-20">
                  {{ item.msg }}
                  <p class="text-theme-stroke-2 text-subtitle-1 mt-3 mb-0 font-weight-bold text-right"> {{
                      item.name
                    }}</p>
                  <p class="text-right mt-0 text-caption text-theme-stroke-1 opacity-8">{{ item.designation }}</p>
                </div>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col sm="1" cols="12" :class="$vuetify.display.mobile?'text-center ':'text-right'">
        <div>
          <v-btn variant="outlined" color="rgb(var(--v-theme-theme-stroke-2),0.8)" class="control-btn ma-2" @click="changeSlide('previous')">
            <v-icon size="x-large">mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn variant="outlined"  color="rgb(var(--v-theme-theme-stroke-2),0.8)"  class="control-btn ma-2" @click="changeSlide('next')">
            <v-icon size="x-large">mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
.control-btn {
  min-width: 40px;
  width: 40px;
}


.testimonial-bg-theme1 {
  background-color: rgb(var(--v-theme-theme-fill-3), 0.1)
}

.testimonial-bg-theme2 {
  background-color: rgb(var(--v-theme-theme-fill-3), 1)
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
      carousel: 0,
      testimonial_list: [
        {
          img: "https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/Team-Image.jpg",
          msg: "You can help customers in real-time across all of your channels from email, social, website, iOS, and Android apps.",
          name: "Dr Om vijay Sahu",
          designation: "Founder of Digital ayurveda",
        }, {
          img: "https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/Team-Image.jpg",
          msg: "You can help customers in real-time across all of your channels from email, social, website, iOS, and Android apps.",
          name: "Dr Om vijay Sahu",
          designation: "Founder of Digital ayurveda",
        }, {
          img: "https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/Team-Image.jpg",
          msg: "You can help customers in real-time across all of your channels from email, social, website, iOS, and Android apps.",
          name: "Dr Om vijay Sahu",
          designation: "Founder of Digital ayurveda",
        }
      ]
    }
  },
  methods: {
    changeSlide(action) {
      console
      if (action == 'next')
        this.carousel = this.testimonial_list.length - 1 > this.carousel ? this.carousel + 1 : 0
      else
        this.carousel = this.carousel > 0 ? this.carousel - 1 : this.testimonial_list.length - 1


    }
  }
}
</script>