<template>
  <img @click="Edit" src="../../../assets/icon/pencil.svg" alt="Edit" />
</template>

<script>
export default {
  props: ["routername", "id"],
  methods: {
    Edit() {
      this.$router.push({
        name: this.$props.routername,
        params: { id: this.$props.id },
      });
    },
  },
};
</script>

<style></style>
