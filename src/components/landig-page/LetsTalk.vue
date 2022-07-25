<template>
  <div id="lets-talk" class="py-15 app-padding contact-section" :style="{ backgroundImage : 'url(' + background_image + ')' }">
    <v-row align="center" justify="center" class="my-10" no-gutters>
      <v-col sm="6" cols="13" :class="$vuetify.display.mobile?'text-center':'text-right'">
        <p class="text-secondary2 font-weight-bold mb-5" :class="$vuetify.display.mobile?'text-subtitle-1':'text-h6'">
          Want to build your digital Product?</p>
        <h1 class="font-weight-bold text-primary-darken-2" :class="$vuetify.display.mobile?'text-h4 ':'text-h2'"> Let's
          Talk </h1>
        <p class=" mt-2 text-secondary font-weight-regular mb-5"
           :class="$vuetify.display.mobile?'text-subtitle-1':'text-h6'">
          Whether you need a full product, consultation, tech investments
          or an extended team, our expert
          will help you find the best solutions.
        </p>
      </v-col>
      <v-col sm="6" cols="13" class="text-right">
        <div class="mx-auto contact-card" max-width="400">
          <v-card-text :class="$vuetify.display.mobile?'px-6 py-8':'px-10 py-8'">
            <v-form ref="contact_form" v-model="valid" lazy-validation @submit.prevent="submitQueryForm()">
              <v-text-field
                  v-model="name"
                  label="Your Name"
                  density="comfortable"
                  :rules="[$rules.REQUIRED_FIELD('Name')]"
              ></v-text-field>

              <v-text-field
                  v-model="mobile"
                  maxlength="10"
                  label="Mobile"
                  density="comfortable"
                  :rules="$rules.MOBILE"
              ></v-text-field>

              <v-text-field
                  v-model="email"
                  label="Email"
                  density="comfortable"
                  :rules="$rules.EMAIL"
              ></v-text-field>

              <v-textarea
                  v-model="description"
                  label="Description"
                  density="comfortable"
                  rows="2"
                  :rules="[$rules.REQUIRED_FIELD('Description')]"
              ></v-textarea>
              <center>
                <v-btn color="secondary" width="210" height="50" class="send-btn" type="submit">
                  <span class="text-white font-weight-bold text-subtitle-1">Send</span>
                </v-btn>
              </center>
            </v-form>
          </v-card-text>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss">
.send-btn {
  box-shadow: 3px 12px 17px #B7FFFB;
}

.contact-card {
  backdrop-filter: blur(10px);
  backdrop-filter: saturate(200%) blur(10px);
  background-color: rgb(var(--v-theme-surface), 0.1);
  border-radius: 12px;
  max-width: 400px;
  -webkit-box-shadow: 0px 36px 58px 11px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 36px 58px 11px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 36px 58px 11px rgba(0, 0, 0, 0.25);
}


.contact-section {
  background-position: bottom;
  background-size: contain;
}
</style>

<script>
export default {
  name: 'LetsTalk',
  components: {},
  data() {
    return {
      name: "",
      mobile: "",
      email: "",
      description: "",
      valid: false,
      background_image: ""
    }
  },
  mounted() {
    this.background_image = require("@/assets/" + this.$vuetify.theme.global.name + "/wave-1.svg")
  },
  methods: {
    submitQueryForm() {
      this.$refs.contact_form.validate()
      if (!this.valid)
        return false
    }
  }
};
</script>
