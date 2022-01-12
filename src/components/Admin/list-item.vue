<template>
  <div class="list-item">
    <div v-if="this.showItems" class="items">
      <div class="made-item">{{ this.date[0] }}</div>
      <div class="icon" @click="GotToPage">
        <img src="../../assets/icon/arrow-down-left-square.svg" alt="Goto" />
      </div>
    </div>

    <div class="item" @click="this.showItems = !this.showItems">
      <div class="id-item">{{ data.id }}</div>
      <div class="content-item">
        {{ data.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      showItems: false,
      date: "",
    };
  },

  mounted() {
    this.GetDate();
  },

  methods: {
    GotToPage() {
      this.$router.push({
        name: "Collection",
        params: { id: this.$props.data.id },
      });
    },
    GetDate() {
      this.date = this.$props.data.made.split("T");
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/admin.css";
</style>
