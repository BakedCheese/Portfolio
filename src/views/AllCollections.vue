<template>
  <div class="container" style="max-width: 900px">
    <h1>All Collections</h1>
    <div class="margin"></div>
    <div v-if="this.collections.length > 0">
      <div v-for="collection in collections" :key="collection.id">
        <ClickablePictureCollection :collection_id="collection.id" />
        <div class="margin"></div>
      </div>
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClickablePictureCollection from "../components/clickable-picture-collection.vue";
export default {
  components: { ClickablePictureCollection },
  data() {
    return {
      collections: [],
    };
  },

  created() {
    this.load();
    document.title = "Collections";
  },

  methods: {
    Create() {
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

<style></style>
