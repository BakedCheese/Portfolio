<template>
  <div class="center text-center">
    <router-view />
  </div>
  <div class="center text-center">
    <footer class="footer">Made by BakedCheese</footer>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  user-select: none;
  -webkit-user-select: none; /*Safari*/
  -moz-user-select: none; /*Firefox*/
}

.footer {
  color: rgba(30, 30, 30, 0.8);
  font-weight: 500;
}
</style>
