<template>
  <div class="block-content">
    <div v-if="paragraph.content.length > 0">
      <p v-if="!paragraph.links">
        {{ paragraph.content }}
      </p>
      <a v-else :href="paragraph.content" target="_blank">{{
        paragraph.content
      }}</a>
    </div>
    <div class="margin"></div>
    <div class="pic-mar" v-if="this.pictures.length != 0">
      <div v-for="picture in pictures" :key="picture.id">
        <imageinlayout :picture="picture" />
        <div class="margin"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import imageinlayout from "./image-layout.vue";
export default {
  props: ["paragraph"],

  components: { imageinlayout },

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
button {
  border: none;
  box-shadow: none;
  padding: 0px;
}
.block-content {
  text-align: start;
}
.content_of_para {
  color: rgba(30, 30, 30, 0.8);

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.45rem;
}
.pic-mar {
  margin-top: 30px;
}
</style>
