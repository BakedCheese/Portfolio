<template>
  <img
    @click="GoToPage"
    src="../../../assets/icon/arrow-down-left-square.svg"
    alt="Goto"
  />
</template>

<script>
export default {
  props: ["name", "params"],
  methods: {
    GoToPage() {
      this.$router.push({
        name: this.$props.name,
        params: { id: this.$props.params },
      });
    },
  },
};
</script>

<style></style>
