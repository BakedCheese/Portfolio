<template>
  <div class="container" style="max-width: 700px">
    <h1>Welcome to admin control</h1>
    <div class="buttons">
      <button @click="createCollection">Create Collection</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  beforeCreate() {
    if (!window.sessionStorage.getItem("key")) {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    createCollection() {
      this.$router.push({ name: "CreateCollection" });
    },
  },
};
</script>

<style></style>
