<template>
  <div class="container" style="max-width: 700px">
    <h1>Welcome to admin control</h1>
    <div class="buttons">
      <button @click="createCollection">Create Collection</button>
    </div>
    <div class="margin"></div>
    <div class="list">
      <div v-for="collection in collections" :key="collection.id">
        <listItem :data="collection" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import listItem from "../../components/Admin/list-item.vue";
export default {
  components: { listItem },
  beforeCreate() {
    if (!window.sessionStorage.getItem("key")) {
      this.$router.push({ name: "Login" });
    }
  },
  mounted() {
    this.load();
  },
  data() {
    return {
      collections: [],
    };
  },
  methods: {
    createCollection() {
      this.$router.push({ name: "CreateCollection" });
    },
    async load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/collections`
        );
        this.collections = response.data;
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/admin.css";
</style>
