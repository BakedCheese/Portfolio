<template>
  <div class="container default">
    <div class="block">
      <div class="inner-block">
        <h2 class="b-text fw-bolder spacing">Project: {{ this.title }}</h2>
        <p class="g-text">{{ this.discription }}</p>
        <div class="margin"></div>
        <div v-for="para in paragraphs" :key="para.id">
          <LayoutContent :paragraph="para" />
          <div class="margin"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LayoutContent from "../components/layout-content.vue";
export default {
  components: { LayoutContent },
  created() {
    document.title = "...";
    this.load();
  },
  data() {
    return {
      title: "",
      discription: "",
      paragraphs: [],
    };
  },
  methods: {
    async load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/projects/${this.$route.params.id}`
        );
        this.title = response.data.title;
        this.discription = response.data.discription;
        document.title = "P:" + this.title;
        try {
          const response = await axios.get(
            `https://bakedcheese.nl/webserver/paragraphs`
          );
          for (let index = 0; index < response.data.length; index++) {
            if (response.data[index].project_id == this.$route.params.id) {
              this.paragraphs.push(response.data[index]);
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
