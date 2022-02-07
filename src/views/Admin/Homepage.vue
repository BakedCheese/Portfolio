<template>
  <div class="container admin" style="max-width: 900px">
    <h1>Welcome to admin control</h1>
    <div class="margin"></div>
    <div class="item-list-heading">
      <div class="heading-with-button">
        <div class="see-unsee-icon" @click="this.querySee = !this.querySee">
          <img
            v-if="this.querySee"
            src="../../assets/icon/circle-fill.svg"
            alt="unsee"
          />
          <img v-else src="../../assets/icon/circle.svg" alt="see" />
        </div>
        Custom query
      </div>
    </div>
    <div class="line"></div>
    <div class="margin"></div>
    <customQuery v-if="this.querySee" />
    <div class="margin"></div>

    <div class="item-list-heading">
      <div class="heading-with-button">
        <div
          class="see-unsee-icon"
          @click="this.noneConnectedSee = !this.noneConnectedSee"
        >
          <img
            v-if="this.noneConnectedSee"
            src="../../assets/icon/circle-fill.svg"
            alt="unsee"
          />
          <img v-else src="../../assets/icon/circle.svg" alt="see" />
        </div>
        None connected
      </div>
    </div>
    <div class="line"></div>
    <div class="margin"></div>
    <ListOfNoneConnected v-if="this.noneConnectedSee" />
    <div class="margin"></div>

    <div class="item-list-heading">
      <div class="heading-with-button">
        <div
          class="see-unsee-icon"
          @click="this.collectionsSee = !this.collectionsSee"
        >
          <img
            v-if="this.collectionsSee"
            src="../../assets/icon/circle-fill.svg"
            alt="unsee"
          />
          <img v-else src="../../assets/icon/circle.svg" alt="see" />
        </div>
        Custom query
      </div>
      <button v-if="this.collectionsSee" @click="createCollection">
        <div class="title">Create new collection</div>
      </button>
    </div>
    <div class="line"></div>
    <div v-if="this.collectionsSee" class="list">
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
import ListOfNoneConnected from "../../components/Admin/List-of-none-connected.vue";

export default {
  components: { collectionItem, customQuery, ListOfNoneConnected },
  beforeCreate() {
    if (!window.sessionStorage.getItem("key")) {
      this.$router.push({ name: "Login" });
    }
  },
  mounted() {
    this.load();
  },

  created() {
    document.title = "Admin Contol";
  },
  data() {
    return {
      collections: [],
      querySee: false,
      noneConnectedSee: false,
      collectionsSee: true,
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
