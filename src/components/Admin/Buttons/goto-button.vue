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
      let routeData = this.$router.resolve({
        name: this.$props.name,
        params: { id: this.$props.params },
      });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<style></style>
