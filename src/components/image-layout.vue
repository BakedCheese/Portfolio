<template>
  <img
    class="picture"
    @click="big = !big"
    :src="picture.url"
    :alt="picture.alt"
  />
  <div v-if="big" @click="big = !big" class="bigpicture">
    <img class="img-fluid" :src="picture.url" :alt="picture.alt" />
  </div>
</template>

<script>
export default {
  props: ["picture"],

  data() {
    return {
      big: false,
    };
  },
};
</script>

<style scoped>
.picture {
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  height: 120px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  transition: height 0.4s ease-in-out;
}

@media only screen and (min-width: 600px) {
  .picture:hover {
    height: 500px;
  }
}

@media only screen and (max-width: 600px) {
  .picture {
    height: 170px;
  }
}

.img-fluid {
  padding: 0px 20px;
}
</style>
