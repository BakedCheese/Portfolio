<template>
  <div class="list-item">
    <div v-if="this.showProjects" class="items">
      <div class="date-item">Made on: {{ this.date }}</div>
      <div class="buttons">
        <DeleteButton :item="'pictures'" :id="this.picture.id" />
      </div>
    </div>
    <div @click="this.showProjects = !this.showProjects">
      <div class="item" :class="{ 'item-active-img': this.showProjects }">
        <div class="id-item">{{ this.index + 1 }}</div>
        <div class="content-item">{{ this.picture.alt }}</div>
        <img src="../../assets/icon/file-image.svg" alt="" />
      </div>
    </div>
    <div v-if="this.showProjects">
      <img class="img-item" :src="this.picture.url" :alt="this.picture.alt" />
    </div>
  </div>
</template>

<script>
import DeleteButton from "./Buttons/delete-button.vue";
export default {
  props: ["picture", "index"],
  components: { DeleteButton },
  data() {
    return {
      showProjects: false,
      date: "",
    };
  },
  mounted() {
    this.GetDate();
  },
  methods: {
    GetDate() {
      this.date = this.$props.picture.made.split("T")[0];
    },
  },
};
</script>

<style></style>
