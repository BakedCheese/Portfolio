<template>
  <div class="container default">
    <div class="block">
      <div class="inner-block">
        <h2 class="b-text fw-bolder">Hello . Osu . Morge</h2>
        <p class="g-text">
          My name is Tim van Daalen, I'm a Dutch software Engineer student at
          The Hague University of Applied Sciences. I like playing and making
          games, exploring the world of the unknown, traveling and being a nerd.
        </p>
        <div class="right-side">
          <div class="button button-under-object" @click="AboutMe">
            About me
          </div>
        </div>
        <div class="margin"></div>
        <div class="margin">
          <h4 class="b-text fw-bold spacing">Latest Collections</h4>
        </div>
        <div class="some-collections" v-if="collections.length > 0">
          <ClickablePictureCollection :collection_id="collections[0].id" />
          <div class="margin"></div>
          <ClickablePictureCollection :collection_id="collections[1].id" />
        </div>
        <div class="right-side">
          <div class="button button-under-object" @click="AllCollection">
            All collections
          </div>
        </div>
        <div class="margin"></div>
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
    document.title = "Welcome";
  },

  mounted() {
    this.load();
  },

  methods: {
    Create() {
      this.$router.push({ name: "CreateCollection" });
    },

    AboutMe() {
      this.$router.push({ name: "AboutMe" });
    },

    AllCollection() {
      this.$router.push({ name: "AllCollections" });
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
.some-collections {
  padding: 0px;
}

.spacing {
  letter-spacing: 3px;
}

.button {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  height: 40px;
  width: 200px;
  color: rgba(30, 30, 30, 0.8);
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 1.3rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.button:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 6px;
  color: rgba(30, 30, 30, 1);
}
.button-under-object {
  margin-top: 15px;
}
.right-side {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
}
</style>
