<template>
  <div class="container" style="max-width: 1100px">
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
      <input type="text" placeholder="Caption" v-model="this.cap" />
      <div class="margin"></div>
      <input type="text" placeholder="Reference" v-model="this.ref" />
      <div class="margin"></div>
      <div>
        <button @click="Create">Add</button>
        <div class="margin"></div>
        <button @click="CreateAndMore">Add & More</button>
        <div class="margin"></div>
        <button @click="Canel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["paragraph_id", "paragraph_title", "picturessize"],
  data() {
    return {
      url: "",
      alt: "",
      cap: "",
      ref: "",
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
      this.CreatePicture();
      this.$router.push({ name: "Homepage" });
    },

    async CreateAndMore() {
      this.CreatePicture();
    },

    async CreatePicture() {
      try {
        if (this.url) {
          await axios.post(`https://bakedcheese.nl/webserver/pictures`, {
            order_in_paragraph: this.$props.picturessize,
            url: this.url,
            alt: this.alt,
            caption: this.cap,
            reference: this.ref,
            paragraph_id: this.$props.paragraph_id,
          });

          const resPar = await axios.get(
            `https://bakedcheese.nl/webserver/paragraphs/${this.$props.paragraph_id}`
          );

          const resPro = await axios.get(
            `https://bakedcheese.nl/webserver/projects/${resPar.data.project_id}`
          );

          await axios.put(
            `https://bakedcheese.nl/webserver/collections/${resPro.data.collection_id}`,
            {
              has_picture: true,
            }
          );

          this.url = "";
          this.alt = "";
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
