<template>
  <div class="container default">
    <div class="directions">
      <small> <a @click="GotoHome">Home </a> > All collections</small>
    </div>
    <div class="block">
      <div class="inner-block">
        <h4 class="b-text fw-bold spacing">All Collections</h4>
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
    GotoHome() {
      this.$router.push({
        name: "Home",
      });
    },
    Create() {
      this.$router.push({ name: "CreateCollection" });
    },
    async load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/collections`
        );
        response.data.forEach((collection) => {
          if (collection.has_picture) {
            this.collections.push(collection);
          }
        });
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style></style>
