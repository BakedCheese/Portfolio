<template>
  <div style="max-width: 900px">
    <h1>All Collections</h1>
    <div class="margin"></div>
    <div v-for="(collection, index) in collections" :key="collection.id">
      <div v-if="index % 2 == 0">
        <div class="row">
          <div class="col-sm-6 col-12">
            <ClickablePicture :collection_id="collections[index].id" />
            <div class="margin"></div>
          </div>
          <div class="col-sm-6 col-12">
            <ClickablePicture :collection_id="collections[index + 1].id" />
            <div class="margin"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClickablePicture from "../components/clickable-picture.vue";
export default {
  components: { ClickablePicture },
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
          `https://portfolio-app-6qg7c.ondigitalocean.app/webserver/collections`
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
