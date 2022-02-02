<template>
  <form class="form">
    <div class="query">
      <input type="text" placeholder="The query" v-model="this.query" />
      <div class="query-button" @click.prevent="submitQuery">Query</div>
    </div>
    <div class="margin"></div>
    <div class="query-response">{{ this.response }}</div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      query: "",
      response: "",
    };
  },
  methods: {
    async submitQuery() {
      console.log(this.query);
      try {
        const response = await axios.post(
          "https://bakedcheese.nl/webserver/customquery",
          {
            query: this.query,
          }
        );

        this.response = response.data;
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
