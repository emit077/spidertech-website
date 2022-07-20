<template>
  <div class="py-15 app-padding contact-section" :style="{ backgroundImage : 'url(' + background_image + ')' }">
    <v-row align="center" justify="center" class="my-10">
      <v-col sm="6" cols="13" class="text-right">
        <p class="text-secondary2 text-h6 font-weight-bold mb-5">Want to build your digital Product?</p>
        <h1 class="text-h2 font-weight-bold text-primary-darken-2"> Let's Talk </h1>
        <p class="text-h6 mt-2 text-secondary font-weight-regular mb-5">
          Whether you need a full product, consultation, tech investments
          or an extended team, our expert
          will help you find the best solutions.
        </p>
      </v-col>
      <v-col sm="6" cols="13" class="text-right">
        <v-card class="mx-auto contact-card" max-width="400" elevation="10">
          <v-card-text class="px-10 py-8">
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
        </v-card>
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
  backdrop-filter: saturate(180%) blur(10px);
  opacity: 0.8;
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
