<template>
  <div class="container" style="max-width: 700px">
    <div class="form">
      <h2>Edit collection: {{ this.title }}</h2>
      <div class="line"></div>
      <div class="margin"></div>
      <h5>Collection content</h5>
      <div class="line"></div>
      <div class="margin"></div>
      <input
        type="text"
        placeholder="Title of collection"
        v-model="this.title"
      />
      <div class="margin"></div>
      <textarea
        class="contents"
        placeholder="Description of collection"
        v-model="this.discription"
      />
      <div class="margin"></div>
      <div>
        <button @click="Edit">Edit</button>
        <div class="margin"></div>
        <button @click="Canel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      discription: "",
      collection: null,
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

    async Edit() {
      try {
        await axios.put(
          `https://bakedcheese.nl/webserver/collections/${this.$route.params.id}`,
          {
            title: this.title,
            discription: this.discription,
            updated: new Date().toISOString().slice(0, 19).replace("T", " "),
          }
        );
        this.$router.push({ name: "Homepage" });
      } catch (err) {
        console.log(err.message);
      }
    },

    async Load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/collections/${this.$route.params.id}`
        );

        this.collection = response.data;
        this.title = this.collection.title;
        this.discription = this.collection.discription;
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
