<template>
  <div class="container" style="max-width: 900px">
    <h1>Welcome to admin control</h1>
    <div class="margin"></div>
    <div class="item-list-heading">
      <div>Custom query</div>
    </div>
    <div class="line"></div>
    <div class="margin"></div>
    <customQuery />
    <div class="margin"></div>
    <div class="item-list-heading">
      <div>Collections</div>
      <button @click="createCollection">Create new collection</button>
    </div>
    <div class="line"></div>
    <div class="list">
      <div v-for="(collection, index) in collections" :key="collection.id">
        <collectionItem :data="collection" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import collectionItem from "../../components/Admin/collection-item.vue";
import customQuery from "../../components/Admin/custom-query.vue";
export default {
  components: { collectionItem, customQuery },
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
