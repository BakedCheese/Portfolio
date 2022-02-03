<template>
  <div class="container default">
    <div class="directions">
      <small> <a @click="GotoHome">Home </a> > {{ this.title }}</small>
    </div>
    <div class="block">
      <div class="inner-block">
        <h2 class="b-text fw-bolder spacing">Collection: {{ this.title }}</h2>
        <p class="g-text">{{ this.discription }}</p>
        <div class="margin"></div>
        <div class="margin">
          <h4 class="b-text fw-bold spacing">Projects within</h4>
        </div>
        <div v-if="this.projects.length > 0">
          <div v-for="project in projects" :key="project.id">
            <ClickablePictureProject :project="project" />
            <div class="margin"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClickablePictureProject from "../components/clickable-picture-project.vue";
export default {
  components: { ClickablePictureProject },
  created() {
    document.title = "...";
  },
  mounted() {
    this.load();
  },
  data() {
    return {
      title: "",
      discription: "",
      projects: [],
    };
  },
  methods: {
    GotoHome() {
      this.$router.push({
        name: "Home",
      });
    },
    async load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/collections/${this.$route.params.id}`
        );
        this.title = response.data.title;
        this.discription = response.data.discription;
        document.title = "C:" + this.title;

        try {
          const response = await axios.get(
            `https://bakedcheese.nl/webserver/projects`
          );
          for (let index = 0; index < response.data.length; index++) {
            if (response.data[index].collection_id == this.$route.params.id) {
              this.projects.push(response.data[index]);
            }
          }
        } catch (err) {
          console.log(err.message);
        }
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style></style>
