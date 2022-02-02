<template>
  <div class="container" style="max-width: 700px">
    <div class="form">
      <h2>Add a new picture to the paragraph: {{ this.create_in_title }}</h2>
      <div class="line"></div>
      <div class="margin"></div>
      <h5>Picture content</h5>
      <div class="line"></div>
      <div class="margin"></div>
      <input type="text" placeholder="URL" v-model="this.url" />
      <div class="margin"></div>
      <input type="text" placeholder="ALT" v-model="this.alt" />
      <div class="margin"></div>
      <div>
        <button @click="Create">Add</button>
        <div class="margin"></div>
        <button @click="Canel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["paragraph_id", "paragraph_title"],
  data() {
    return {
      url: "",
      alt: "",
      create_in_title: this.$props.paragraph_title,
    };
  },
  beforeCreate() {
    if (!window.sessionStorage.getItem("key")) {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    Canel() {
      this.$router.push({ name: "Homepage" });
    },

    async Create() {
      try {
        if (this.url && this.alt) {
          await axios.post(`https://bakedcheese.nl/webserver/pictures`, {
            url: this.url,
            alt: this.alt,
            paragraph_id: this.$props.paragraph_id,
          });

          await axios.put(
            `https://bakedcheese.nl/webserver/paragraphs/${this.$props.paragraph_id}`,
            {
              has_picture: 1,
            }
          );

          this.$router.push({ name: "Homepage" });
        } else {
          console.log("Can't add, because there is no content!");
        }
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/admin.css";
</style>
