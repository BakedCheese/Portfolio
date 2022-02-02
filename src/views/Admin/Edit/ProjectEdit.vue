<template>
  <div class="container" style="max-width: 700px">
    <div class="form">
      <h2>Edit project: {{ this.title }}</h2>
      <div class="line"></div>
      <div class="margin"></div>
      <h5>Project content</h5>
      <div class="line"></div>
      <div class="margin"></div>
      <input type="text" placeholder="Title of project" v-model="this.title" />
      <div class="margin"></div>
      <textarea
        class="contents"
        placeholder="Description of project"
        v-model="this.discription"
      />
      <div class="margin"></div>
      <select v-model="this.selected">
        <option
          v-for="collection in collections"
          v-bind:value="collection.id"
          :key="collection.id"
        >
          ID: {{ collection.id }} - Title: {{ collection.title }}
        </option>
        <option v-bind:value="null">NONE</option>
      </select>

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
      project: null,
      collections: [],
      selected: null,
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
          `https://bakedcheese.nl/webserver/projects/${this.$route.params.id}`,
          {
            title: this.title,
            discription: this.discription,
            collection_id: this.selected,
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
          `https://bakedcheese.nl/webserver/projects/${this.$route.params.id}`
        );

        this.project = response.data;
        this.title = this.project.title;
        this.discription = this.project.discription;

        const responseCollection = await axios.get(
          `https://bakedcheese.nl/webserver/collections`
        );

        this.collections = responseCollection.data;

        for (let index = 0; index < this.collections.length; index++) {
          if (this.collections[index].id == this.project.collection_id) {
            this.selected = this.collections[index].id;
            break;
          }
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
