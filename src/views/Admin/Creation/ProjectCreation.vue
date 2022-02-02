<template>
  <div class="container" style="max-width: 700px">
    <div class="form">
      <h2>Create new project in collection: {{ this.create_in_title }}</h2>
      <div class="line"></div>
      <div class="margin"></div>
      <h5>Project content</h5>
      <div class="line"></div>
      <div class="margin"></div>
      <input type="text" placeholder="Title of project" v-model="this.title" />
      <div class="margin"></div>
      <textarea
        class="discription"
        placeholder="Description of project"
        v-model="this.discription"
      />
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
  props: ["collection_id", "collection_title"],
  data() {
    return {
      title: "",
      discription: "",
      create_in_title: this.$props.collection_title,
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
        if (this.title && this.discription) {
          await axios.post(`https://bakedcheese.nl/webserver/projects`, {
            title: this.title,
            discription: this.discription,
            collection_id: this.$props.collection_id,
          });

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
