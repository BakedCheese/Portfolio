<template>
  <div class="container" style="max-width: 1100px">
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
      icons: [],
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

  mounted() {
    this.Load();
  },

  methods: {
    Canel() {
      this.$router.push({ name: "Homepage" });
    },

    async Load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/icons`
        );
        this.icons = response.data;
      } catch (err) {
        console.log(err.message);
      }
    },
    async Create() {
      try {
        if (this.title && this.discription) {
          await axios.post(`https://bakedcheese.nl/webserver/projects`, {
            title: this.title,
            discription: this.discription,
            collection_id: this.$props.collection_id,
          });

          await axios.put(
            `https://bakedcheese.nl/webserver/collections/${this.$props.collection_id}`,
            {
              updated: new Date().toISOString().slice(0, 19).replace("T", " "),
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
