<template>
  <div class="image-holder">
    <div class="picture-cluster">
      <imageincluster
        class="image-in-cluster"
        v-for="picture in pictures"
        :key="picture.id"
        :picture="picture"
      />
    </div>
  </div>
</template>

<script>
import imageincluster from "./image-in-cluster.vue";
export default {
  props: ["pictures"],
  components: { imageincluster },
};
</script>

<style scoped>
.picture-cluster {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  border-radius: 10px;
}

.image-in-cluster {
  flex-grow: 1;
  width: 48%;
}

.image-in-cluster:nth-child(odd) {
  margin-right: 10px;
}

.image-in-cluster:last-child {
  margin-right: 0px;
}

.image-in-cluster:nth-child(-n + 3) {
  margin-bottom: 10px;
}
</style>
