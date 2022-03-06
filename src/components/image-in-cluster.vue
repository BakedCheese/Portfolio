<template>
  <div class="image-holder">
    <img
      class="picture"
      @click="biggerPicture"
      :src="picture.url"
      :alt="picture.alt"
    />
    <div v-if="this.big" class="bigPicture" @click="smallerPicture">
      <div><img :src="picture.url" :alt="picture.alt" /></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["picture"],

  data() {
    return {
      big: false,
      referenceTitle: "",
    };
  },

  mounted() {
    if (this.picture.reference) {
      this.referenceTitle = this.picture.reference.substring(0, 20);
    }
  },

  methods: {
    biggerPicture() {
      this.big = !this.big;
      document.body.classList.add("no-scroll");
    },
    smallerPicture() {
      this.big = !this.big;
      document.body.classList.remove("no-scroll");
    },
  },
};
</script>

<style scoped>
.picture {
  border-radius: 10px;

  width: 100%;
  height: 200px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.bigPicture {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.75);
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bigPicture div {
  padding: 5%;
}

.bigPicture img {
  border-radius: 10px;
  width: 100%;
  max-height: 95vh;
}
</style>
