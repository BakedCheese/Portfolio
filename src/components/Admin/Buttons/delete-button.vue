<template>
  <img @click="Delete" src="../../../assets/icon/trash.svg" alt="Goto" />
</template>

<script>
import axios from "axios";
export default {
  props: ["item", "id"],
  methods: {
    async Delete() {
      try {
        const response = await axios.delete(
          `https://bakedcheese.nl/webserver/${this.$props.item}/${this.$props.id}`
        );
        this.$router.go();
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style></style>
