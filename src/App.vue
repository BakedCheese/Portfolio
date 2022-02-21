<template>
  <div class="center text-center">
    <router-view />
  </div>
  <div class="center text-center no-select">
    <footer class="footer">
      Made by
      <div class="link" @click="Contact">BakedCheese</div>
    </footer>
    <div class="margin"></div>
  </div>
</template>

<script>
export default {
  methods: {
    Contact() {
      this.$router.push({ name: "Contact" });
    },
  },
};
</script>

<style scoped>
.no-select {
  user-select: none;
  -webkit-user-select: none; /*Safari*/
  -moz-user-select: none; /*Firefox*/
}
.center {
  display: flex;
  justify-content: center;
}

.footer {
  color: rgba(30, 30, 30, 0.8);
  font-weight: 500;
}
.link {
  display: inline;
  color: black;
  cursor: pointer;
  border-bottom: 0px solid black;
  transition: border-bottom 0.05s ease-in-out;
}
.link:hover {
  border-bottom: 2px solid black;
}
</style>
