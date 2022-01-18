<template>
  <div class="block-content">
    <div v-if="this.pictures.length != 0">
      <div v-for="picture in pictures" :key="picture.id">
        <img class="picture" :src="picture.url" :alt="picture.alt" />
      </div>
    </div>

    <div class="margin"></div>
    <div class="wblock">
      <h2 class="b-text">{{ paragraph.heading }}</h2>
      <div class="margin"></div>
      <p class="g-text content">{{ paragraph.content }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["paragraph"],

  data() {
    return {
      pictures: [],
    };
  },

  created() {
    this.load();
  },

  methods: {
    async load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/pictures`
        );
        for (let index = 0; index < response.data.length; index++) {
          if (response.data[index].paragraph_id == this.paragraph.id) {
            this.pictures.push(response.data[index]);
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
.block-content {
  text-align: start;
}
.content {
  color: rgba(30, 30, 30, 0.8);

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.45rem;
}
.wblock {
  background-color: #f9f9f9;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  border-radius: 50px;
}
.picture {
  border-radius: 50px;
  width: 100%;
  height: 280px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
}
</style>
